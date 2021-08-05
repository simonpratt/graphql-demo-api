// Update with your config settings.

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host: '127.0.0.1',
      user: 'postgres',
      password: 'postgres',
      database: 'graphql_demo',
    },
    migrations: {
      directory: './src',
    },
  },

  production: {
    client: 'postgresql',
    connection: process.env.POSTGRES_CONNECTION_STRING,
    migrations: {
      tableName: 'knex_migrations',
      directory: './src',
    },
  },
};
