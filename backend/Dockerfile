FROM node:12
ENV PORT 1337

RUN mkdir -p /usr/src/strapi
WORKDIR /usr/src/strapi
COPY package*.json /usr/src/strapi/
RUN npm install
COPY . /usr/src/strapi
COPY package*.json /usr/src/strapi
RUN npm run build
EXPOSE 1337
CMD "npm" "run" "develop"
