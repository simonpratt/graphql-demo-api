import gql from 'graphql-tag';

const passSchema = gql`
  type Pass {
    id: String
    site: String
    teamId: String

    state: String
  }

  extend type Query {
    pass(id: String!): Pass
  }
`;

export default passSchema;
