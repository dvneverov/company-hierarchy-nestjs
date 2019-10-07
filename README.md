<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" height="120" alt="Nest Logo" /></a>
  <a href="https://graphql.org/"><img src="https://graphql.org/img/logo.svg" height="120"></a>
  <a href="https://www.postgresql.org/"><img src="https://wiki.postgresql.org/images/thumb/a/a4/PostgreSQL_logo.3colors.svg/540px-PostgreSQL_logo.3colors.svg.png" height="120"></a>
  <a href="https://www.docker.com/"><img src="https://www.docker.com/sites/default/files/d8/2019-07/vertical-logo-monochromatic.png" height="120"></a>
  <a href="https://github.com/typeorm/typeorm"><img src="https://github.com/typeorm/typeorm/raw/master/resources/logo_big.png" height="120"></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest
  
  <p align="center"></p>

## Description

GraphQL API for building company's hierarchical organizational structure.

## Configuration & Installation

Configure database connection by setting environment variables: 
- `DB_HOST` - host (default = localhost), 
- `DB_PORT` - port (default = 5432), 
- `DB_USER` - database user, 
- `DB_PW` - password,
- `DB_DB` - database name

You can set all parameters directly in code in file app.module.ts inside /src directory as well.

Install dependencies by running:

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start:dev
```

App will start listening on `localhost:3000`.

GraphQL playground will be available at http://localhost:3000/graphql
Docs and schema are also available at playground.

## Running with docker

You'll need [Docker](https://www.docker.com/) for that. Once you've got it installed on your machine, simply run this command:

```bash
$ docker-compose up --build
```

Note that "--build" option is required only on first run.

## DEMO

To build example hierarchy tree, run the app, then open another terminal and run seed command:

```bash
$ npm run seed
```

This will add data to the database. 

**WARNING**: Seed script will TRUNCATE all tables before seeding.

After successefull seeding, to check the tree, run this query in the playground:

```
query {
  role {
    name
    descendants
    employee {
      name
      surname
    }
    department {
      name
    }
    children {
      name
      descendants
      employee {
        name
        surname
      }
      department {
        name
      }
      children {
        name
        descendants
        employee {
          name
          surname
        }
        department {
          name
        }
        children {
          name
          descendants
          employee {
            name
            surname
          }
          department {
            name
          }
        }
      }
    }
  }
}
```

Alternatively, you can run CURL request:

```curl
curl 'http://localhost:3000/graphql' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' -H 'Origin: http://localhost:3000' --data-binary '{"query":"query {\n  role {\n    name\n    descendants\n    employee {\n      name\n      surname\n    }\n    department {\n      name\n    }\n    children {\n      name\n      descendants\n      employee {\n        name\n        surname\n      }\n      department {\n        name\n      }\n      children {\n        name\n        descendants\n        employee {\n          name\n          surname\n        }\n        department {\n          name\n        }\n        children {\n          name\n          descendants\n          employee {\n            name\n            surname\n          }\n          department {\n            name\n          }\n        }\n      }\n    }\n  }\n}\n"}' --compressed
```

To run demo in docker container, first change **host** value in file **ormconfig.json** in the root directory from "*localhost*" to "*postgres*"

Next run:

```bash
docker exec -it iqoption-test_api_1 /bin/sh -c "npm run seed"
```

This will also seed database and hierarchy tree will be available to request.

## Test

```bash
# unit tests
$ npm run test

# test coverage
$ npm run test:cov
```
