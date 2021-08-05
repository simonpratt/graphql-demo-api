exports.up = async function (knex) {
  await knex.schema.createTable('users', (table) => {
    table.uuid('id').primary();
    table.string('name').notNull();
    table.string('email').notNull();

    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updatedAt').notNull();
  });

  await knex.schema.createTable('sites', (table) => {
    table.uuid('id').primary();
    table.string('name').notNull();
    table.string('address').notNull();

    table.uuid('teamId').notNull();

    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updatedAt').notNull();
  });

  await knex.schema.createTable('passes', (table) => {
    table.uuid('id').primary();
    table.uuid('userId').notNull();
    table.uuid('siteId').notNull();

    table.uuid('teamId').notNull();

    table.enu('state', ['ACCEPTED', 'REJECTED', 'EXPIRED']).notNull();

    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updatedAt').notNull();
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTable('users');
};
