import knex from 'knex';

import config from '../core/config';

const knexService = knex(config.POSTGRES_CONNECTION_STRING);

export default knexService;
