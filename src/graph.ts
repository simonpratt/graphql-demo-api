import bodyParser from 'body-parser';
import chalk from 'chalk';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import morgan from 'morgan';
import cors from 'cors';
import { makeExecutableSchema } from 'graphql-tools';

import config from './core/config';

import resolvers from './api/graph/resolvers';
import schema from './api/graph/schema';
import securityContextMiddleware from './middleware/securityContext.middleware';

export default function startGraph() {
  const executableSchema = makeExecutableSchema({
    typeDefs: schema,
    resolvers: resolvers,
  });

  // Initialize the app
  const app = express();
  app.use(morgan('short'));

  // CORS Config
  const whitelist = config.CORS_ENABLED_URL.split(',');
  const corsOptions = {
    origin: function (origin: string, callback: any) {
      if (!origin || whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  };
  app.use(cors(corsOptions));

  // The GraphQL endpoint
  app.use(
    '/graphql',
    bodyParser.json(),
    securityContextMiddleware(),
    graphqlHTTP({ schema: executableSchema, graphiql: true }),
  );

  // Start the server
  app.listen(config.GRAPH_PORT, () => {
    console.log(chalk.green(`[graph] graphql-demo API running on port ${config.GRAPH_PORT}`));
  });
}
