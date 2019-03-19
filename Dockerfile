FROM node:alpine

WORKDIR /stickerum

RUN yarn install

CMD yarn start
