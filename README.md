# Meli practical test

This project is carried out as a technical test of an applicant for the front-end area in Mercado Libre

## Description

In this monorepo you will find the frontend and backend of the application requested as a technical test to enter "Mercado Libre"

in it you will find two folders "server-api" and "web-client" using Lerna it is possible to start the 2 projects in parallel, to facilitate the development.


the 2 folders have a structure that is designed thinking of scaling the app and dividing it into 2 independent repositories.

## How to use - With Lerna

first they must create the .env files for each project, using the .env.example files as a base

To run the project in development mode, you must be in the root of the project.

- make sure to install the dependencies:

```
npm i
```

- run develop:

```
npm run dev
```

## How to use - With docker

```
docker-compose up
```

Applications

- `server-api`: http://localhost:3000
- `web-client`: http://localhost:3001

### Requirements:

Node: 18.15.0
