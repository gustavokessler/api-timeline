FROM node:18.13.0-alpine  AS development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install 

COPY . .

RUN npm i -g rimraf

RUN npm run build

FROM node:18.13.0-alpine AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

RUN apk add --no-cache make gcc g++ python3 && \
  npm install --only=production && \
  npm rebuild bcrypt --build-from-source && \
  apk del make gcc g++ python3

COPY --from=development /usr/src/app/dist ./dist


CMD ["node", "dist/main.js"]

