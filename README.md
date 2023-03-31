# Full Stack To-Do

This repository contains the code base that corresponds to a series of blog posts on full stack development. Check it out here: [Full Stack Development Series](https://thefullstack.engineer/full-stack-development-series-an-introduction/)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=wgd3_full-stack-todo&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=wgd3_full-stack-todo)
[![codecov](https://codecov.io/gh/wgd3/full-stack-todo/branch/main/graph/badge.svg?token=YvdXIYy0ji)](https://codecov.io/gh/wgd3/full-stack-todo)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e5079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Features

### Backend - `server`

- NestJS 9
- REST API with Swagger documentation
- JWT authentication support
- TypeORM for support of various database varieties

### Frontend - `client`

- Angular 15
- User registration/login
- Stateless UI
- Storybook integration for component development
- Custom Design Library

### Testing

- Jest for backend unit testing, and `supertest` for integration testing
- Jest for Angular unit tests
- Cypess + Storybook for UI integration Testing
- \> 90% code coverage

### Other

- Kubernetes manifests for cluster deployment
- Dockerfiles for standalone and `docker-compose` support
- GitHub Actions used for all testing, building, and releasing
- Nx monorepo used for clean directory structure and Nx Cloud for distributed CI tasks

## Demo

As part of the [Deployment Blog Post](https://thefullstack.engineer/full-stack-development-series-part-6-application-deployment-and-ci-cd/) I added a small overview on deploying this application stack to Render. Both the UI and the REST API docs can be found here:

| Application |                                             |
| ----------- | ------------------------------------------- |
| Client      | https://fst-demo-client.onrender.com/       |
| Server      | https://fst-demo-server.onrender.com/api/v1 |

**Note** Render's free tier spins down these application after they have idled for a while - it can take up to 30 seconds for the applications to spin back up!

## Environment Variables

To run this project, you will need to copy the `.env.sample` file in the repository root, rename it `.env` and fill out the values accordingly:

| Variable                      | Description/Values                                                                    |
| ----------------------------- | ------------------------------------------------------------------------------------- |
| `DATABASE_TYPE`               | Passed to TypeORM, supports most major SQL-based databases                            |
| `DATABASE_HOST`               | Unneeded if using SQLite, can be used with remote databases or local Docker instances |
| `DATABASE_PORT`               |                                                                                       |
| `DATABASE_USERNAME`           |                                                                                       |
| `DATABASE_PASSWORD`           |                                                                                       |
| `DATABASE_NAME`               |                                                                                       |
| `DATABASE_PATH`               | Only used with SQLite for relative file path                                          |
| `JWT_SECRET`                  | String used to sign JWTs generated by the API                                         |
| `JWT_ACCESS_TOKEN_EXPIRES_IN` | Time in seconds that access tokens are valid                                          |

## Run Locally

Clone the project

```bash
  git clone https://github.com/wgd3/full-stack-todo
```

Go to the project directory

```bash
  cd full-stack-todo
```

Install dependencies

```bash
  npm install
```

Set up environment file

```bash
  cp .env.sample .env
```

Start the server

```bash
  npx nx run-many --target=serve --all
```

## Running Tests

To run tests, run the following command

```bash
  # for unit tests
  npx nx run-many --target=test --all --codeCoverage

  # for E2E tests
  npx nx run-many --target=e2e --all
```
