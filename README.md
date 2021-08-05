### Dev Setup

1. Install global dependencies

`npm i -g typescript knex`

2. Install project dependencies

`npm ci`

3. Create the database

```
> apk add postgresql-client
> psql -h <host> -U <user> -W <password>

postgres=# CREATE DATABASE graphql_demo;
postgres=# \list
```

4. Run the DB migrations

`knex migrate:latest`

5. Run in development mode

`npm run nodemon`

## Linting

Dependencies are:
```
npm i --save-dev eslint eslint-config-prettier eslint-plugin-prettier prettier prettier-eslint
npm i --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin
```