@Library('Cumulus@1.3-stable') _
pipeline {
  agent {
    kubernetes {
      inheritFrom 'jenkins-jenkins-agent'
      yaml podBuilder.from([buildkit])
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
            version = 'latest'
          }
          env.RELEASE = versions.isRelease()
          env.RELEASE_VERSION = version
        }
      }
    }
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
    stage("Trivy scan") {
      steps {
        script {
          trivy.scanImage([fileName: 'image.tar', ignoreFile: '.trivyignore.yaml'])
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
