FROM node:alpine

COPY app /stickerum
WORKDIR /stickerum

RUN npm install --verbose

CMD npm run start
