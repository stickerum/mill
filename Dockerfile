FROM node:alpine

ADD app /stickerum
WORKDIR /stickerum

RUN npm install
