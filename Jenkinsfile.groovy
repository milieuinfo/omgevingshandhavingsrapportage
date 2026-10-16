@Library('Cumulus@1.3-stable') _

def node = '''                                                                                                                                                                       
  apiVersion: v1                                                                                                                                                                     
  kind: Pod                                                                                                                                                                          
  spec:                                                                                                                                                                              
    containers:                                                                                                                                                                      
      - name: node                                                                                                                                                                   
        image: node:20-alpine                                                                                                                                                        
        command: ['cat']                                                                                                                                                             
        tty: true                                                                                                                                                                    
        resources:                                                                                                                                                                   
          requests:                                                                                                                                                                  
            cpu: 100m                                                                                                                                                                
            memory: 256Mi                                                                                                                                                            
          limits:                                                                                                                                                                    
            cpu: 500m                                                                                                                                                                
            memory: 512Mi                                                                                                                                                            
  '''


pipeline {
  agent {
    kubernetes {
      inheritFrom 'jenkins-jenkins-agent'
      yaml podBuilder.from([buildkit, trivy, node])
    }
  }

  environment {
    IMAGE_NAME = 'omgevingshandhavingsrapportage'
  }

  stages {
    stage('Init') {
      steps {
        script {
          def pkg = readJSON file: 'webapp/package.json'
          def version = pkg.version
          echo "Version: ${version}"

          properties([versions.releaseParameters()])
          if (versions.isRelease()) {
            version = versions.bump(version)
          } else {
            version = version + "-dev"
          }
          container("node") {
            dir('webapp') {
              sh "npm version ${version} --no-git-tag-version --allow-same-version"
            }
          }
          currentBuild.displayName = "Release ${version}"
          env.RELEASE = versions.isRelease()
          env.RELEASE_VERSION = version
        }
      }
    }
//    stage("Trivy scan") {
//      steps {
//        script {
//          trivy.scanFilesystem([targetPath: './webapp', ignoreFile: '.trivyignore.yaml'])
//        }
//      }
//    }
    stage("Build Docker image") {
      steps {
        script {
          buildkit.buildImage([
              fileName : 'image.tar',
              buildArgs: [
                  RELEASE: env.RELEASE,
                  VERSION: env.RELEASE_VERSION
              ],
          ])
        }
      }
    }
    stage("Push Docker image") {
      steps {
        script {
          if (!env.RELEASE_VERSION) {
            error "Version could not be determined. Aborting pipeline."
          }
          if (!versions.isRelease()) {
            buildkit.pushSnapshotImage([fileName : 'image.tar',
                                        imageName: env.IMAGE_NAME,
                                        tag      : 'latest'
            ])
          }
          if (versions.isRelease()) {
            buildkit.pushReleaseImage([fileName : 'image.tar',
                                       imageName: env.IMAGE_NAME,
                                       tag      : env.RELEASE_VERSION
            ])
          }
        }
      }
    }
    stage("Tag and update version") {
      when {
        expression {
          versions.isRelease()
        }
      }
      steps {
        script {
          git.commit("Release ${env.RELEASE_VERSION}")
          git.tag(env.RELEASE_VERSION)
          git.push()
        }
      }
    }
  }
  post {
    always {
      script {
        pipelineSummary([:])
      }
    }
  }
}
