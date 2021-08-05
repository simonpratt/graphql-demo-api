import Joi from '@hapi/joi';

const configSchema = Joi.object().keys({
  CORS_ENABLED_URL: Joi.string().required(),
  GRAPH_PORT: Joi.string().required(),

  POSTGRES_CONNECTION_STRING: Joi.string().required(),
  REDIS_CONNECTION_STRING: Joi.string().required(),
});

const validateConfig = () => {
  const { error } = configSchema.validate(process.env, { allowUnknown: true });

  if (error) {
    const messages = error.details.map((details) => details.message);
    throw new Error(`Missing environment variables: ${JSON.stringify(messages)}`);
  }
};

validateConfig();

export default {
  CORS_ENABLED_URL: process.env.CORS_ENABLED_URL,
  GRAPH_PORT: process.env.GRAPH_PORT,

  POSTGRES_CONNECTION_STRING: process.env.POSTGRES_CONNECTION_STRING,
  REDIS_CONNECTION_STRING: process.env.REDIS_CONNECTION_STRING,
};
