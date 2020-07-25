FROM node:12.8.0-alpine as builder
# setup the working directory
WORKDIR /app

ADD . .

RUN npm install

RUN npx webpack src/client.js -o public/main.js

FROM nginx

COPY --from=builder /app/public /usr/share/nginx/html

EXPOSE 80