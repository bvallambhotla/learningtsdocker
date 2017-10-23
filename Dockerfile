FROM node:latest

COPY . /app

WORKDIR /app

CMD npm install

EXPOSE 8080

ENTRYPOINT node . --port-number=8080