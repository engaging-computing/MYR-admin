FROM node:12.18

WORKDIR /app
COPY . /app

RUN yarn install
RUN yarn build