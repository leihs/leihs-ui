ARG NODEJS_VERSION=16-bullseye-slim

# === STAGE: BASE NODEJS ======================================================================== #
FROM node:${NODEJS_VERSION} as leihs-base-nodejs


# === STAGE: DEPENDENCIES ======================================================================= #
FROM leihs-base-nodejs AS deps
ARG WORKDIR=/leihs-ui
WORKDIR "$WORKDIR"

ENV NPM_CONFIG_LOGLEVEL warn
COPY package.json package-lock.json ./
RUN npm ci --no-audit
COPY bin/build-symlinks bin/
RUN bin/build-symlinks

# === STAGE: THEME BUILDER ======================================================== #
FROM leihs-base-nodejs AS theme-builder
ARG WORKDIR=/leihs-ui
WORKDIR "$WORKDIR"

COPY legacy legacy/
COPY bootstrap-theme-leihs/package.json bootstrap-theme-leihs/package-lock.json bootstrap-theme-leihs/
RUN cd bootstrap-theme-leihs && npm ci --no-audit
COPY bootstrap-theme-leihs bootstrap-theme-leihs/
RUN cd bootstrap-theme-leihs && npm run build

# === STAGE: THEME BUILDER ======================================================== #
FROM leihs-base-nodejs AS theme-builder-mobile
ARG WORKDIR=/leihs-ui
WORKDIR "$WORKDIR"

COPY legacy legacy/
COPY bootstrap-theme-leihs-mobile/package.json bootstrap-theme-leihs-mobile/package-lock.json bootstrap-theme-leihs-mobile/
RUN cd bootstrap-theme-leihs-mobile && npm ci --no-audit
COPY bootstrap-theme-leihs-mobile bootstrap-theme-leihs-mobile/
RUN cd bootstrap-theme-leihs-mobile && npm run build

# === STAGE: BUILDER ======================================================== #
FROM deps AS builder
ARG WORKDIR=/leihs-ui
WORKDIR "$WORKDIR"

COPY . .
RUN npm run build:ssr

# smoke test
RUN ./dist/leihs-ssr render 'DebugProps' '{"children": "Hello"}'

# NOTE: for smallest size this stage should be built: $ docker build --target dist .
# # === STAGE: DIST ============================================================================= #
FROM scratch AS dist
ARG WORKDIR=/leihs-ui
WORKDIR "$WORKDIR"

COPY --from=theme-builder ${WORKDIR}/bootstrap-theme-leihs/build bootstrap-theme-leihs/build/
COPY --from=theme-builder-mobile ${WORKDIR}/bootstrap-theme-leihs-mobile/build bootstrap-theme-leihs-mobile/build/
COPY --from=builder ${WORKDIR}/dist dist/

# NOTE: for debugging, a container with nodejs and the dist inside, configured to do SSR out of the box.
# $ docker build -t leihs-ui --target ssr . && docker run --rm -it leihs-ui render 'Bold' '{"children": "Hello World"}'
# # === STAGE: SSR ============================================================================== #
FROM leihs-base-nodejs AS ssr
ARG WORKDIR=/leihs-ui
WORKDIR "$WORKDIR"

COPY --from=theme-builder ${WORKDIR}/bootstrap-theme-leihs/build bootstrap-theme-leihs/build/
COPY --from=theme-builder-mobile ${WORKDIR}/bootstrap-theme-leihs-mobile/build bootstrap-theme-leihs-mobile/build/
COPY --from=builder ${WORKDIR}/dist dist/

ENTRYPOINT [ "/leihs-ui/dist/leihs-ssr" ]

# NOTE: for task running, a container with debian, nodejs, build deps, sources and dist.
# $ bin/docker-run bash
# $ bin/docker-run bin/update-snapshots
# $ bin/docker-run npm add hertz # updates the package.json on the host!
# # === STAGE: BIN ============================================================================== #
FROM deps AS runner
ARG WORKDIR=/leihs-ui
WORKDIR "$WORKDIR"

COPY --from=theme-builder ${WORKDIR}/bootstrap-theme-leihs/build bootstrap-theme-leihs/build/
COPY --from=theme-builder-mobile ${WORKDIR}/bootstrap-theme-leihs-mobile/build bootstrap-theme-leihs-mobile/build/
COPY --from=builder ${WORKDIR}/dist dist/
COPY . .