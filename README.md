 <p align="center">A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications, heavily inspired by <a href="https://angular.io" target="blank">Angular</a>.
 </p>

## Description
A Simple CRUD Web API with NestJs, MySql, Sequelize ORM. 

## Installation

```bash
$ git clone git@github.com:xxxxxx/nestJS-poc.git
```

## Running the app

- cd into `nestJS-poc`
- run `npm install`
- set up your mysql database
- Add below params in .env file
```bash
DB_HOST=xxxxxx
DB_PORT=xxxxxx
DB_USER=xxxxxx
DB_PASS=xxxxxx
DB_DIALECT=mysql
DB_NAME_TEST=xxxxxx
DB_NAME_DEVELOPMENT=xxxxxx
DB_NAME_PRODUCTION=xxxxxx
JWTKEY=xxxxxx
TOKEN_EXPIRATION=48h
BEARER=Bearer
PORT=3000
```
- run `npm run start:dev`

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Testing the app

```bash

Login to get the JWT token

curl -X POST \
  http://localhost:3000/api/v1/auth/login \
  -H 'content-type: application/json' \
  -d '{
	"username" : "xxxxxx@xxx.com",
	"password": "password"
}'

Use the token for CRUD operations like below

curl -X GET \
  http://localhost:3000/api/v1/email/xxx@xxx.com \
  -H 'authorization: Bearer eyJXXXXXXXXXX' \
  -H 'content-type: application/json' \
```