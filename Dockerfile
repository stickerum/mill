FROM node:alpine

WORKDIR /stickerum

RUN yarn

CMD yarn start
