import gql from 'graphql-tag';

import passSchema from './pass/pass.schema';
// import sharedSchema from './shared/shared.schema';
import userSchema from './user/user.schema';

const schema = gql`
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
  ${userSchema}
  ${passSchema}
`;

export default schema;
