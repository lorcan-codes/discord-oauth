const { knexSnakeCaseMappers } = require('objection');

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/discordoauth2',
    migrations: {
      directory: './migrations',
      tableName: 'knex_migrations'
    },
    ...knexSnakeCaseMappers()
  }
};
