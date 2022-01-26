FROM node:10.13

WORKDIR /app
COPY . /app

RUN yarn install
RUN yarn build