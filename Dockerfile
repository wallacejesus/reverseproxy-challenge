FROM node:lts-slim AS nodeBuilder
WORKDIR /app
COPY ./app/ .

RUN apt-get update -y
RUN apt-get install yarn -y
RUN yarn install
ENTRYPOINT [ "yarn","start" ]