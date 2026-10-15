FROM acd-docker.repository.milieuinfo.be/milieuinfo/volta:1.1.1.2 AS node_builder

ARG VERSION

WORKDIR /web

COPY ./webapp .

RUN --mount=type=secret,id=npmrc,target=/root/.npmrc \
   --mount=type=cache,target=node_modules \
   npm version "$VERSION" --no-git-tag-version --allow-same-version; \
   npm ci \
   && npm run build

FROM ghcr.io/static-web-server/static-web-server:2-alpine@sha256:2fe3e5c0a20691f23fb270338578c8d31b5f7a19abb308c4c1ec901a7eefbe2e

ARG DEPLOY_DIR=/home/sws/public
ARG PORT=7000
ARG USER=sws

ENV SERVER_PORT=${PORT}
ENV SERVER_LOG_LEVEL=debug
COPY --from=node_builder --chown=${USER}:${USER} /web/build/release ${DEPLOY_DIR}

USER ${USER}
WORKDIR /home/${USER}
EXPOSE ${PORT}
