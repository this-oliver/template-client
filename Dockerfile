# install node
ARG NODE_VERSION=18.18.0
FROM node:${NODE_VERSION}

# set working directory
WORKDIR /app

# copy project files
COPY package.json /package.json
COPY pnpm-lock.yaml /pnpm-lock.yaml
COPY app.vue /app.vue
COPY nuxt.config.ts /nuxt.config.ts
COPY tsconfig.json /tsconfig.json
COPY assets /assets
COPY components /components
COPY composables /composables
COPY layouts /layouts
COPY locales /locales
COPY middleware /middleware
COPY pages /pages
COPY plugins /plugins
COPY public /public
COPY stores /stores
COPY types /types

# install pnpm
ARG PNPM_VERSION=8.9.2
RUN npm install -g pnpm@${PNPM_VERSION}

# install dependencies
RUN pnpm install --shamefully-hoist --frozen-lockfile

# build app
RUN pnpm build

# expose port
EXPOSE 3000

# start app
CMD [ "node", ".output/server/index.mjs" ]
