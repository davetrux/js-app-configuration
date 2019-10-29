FROM node:12

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app/

ARG DOCKER_ENV
ENV NODE_ENV=${DOCKER_ENV}

EXPOSE 3000

CMD [ "npm", "start" ]