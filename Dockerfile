# This is the base dockerfile. Here the base image is pulled and the ras setup is done for the project.
# Make sure to include the base setup for lerna here.
FROM node:18.15.0
WORKDIR /app
COPY ./package*.json ./
COPY ./lerna.json ./

WORKDIR /app/server-api
COPY ./server-api/ ./

WORKDIR /app/web-client
COPY ./web-client/ ./

WORKDIR /app
EXPOSE 3000-3001
RUN npm install
# CMD ["nodemon", "bin/www"]
RUN npm run dev
