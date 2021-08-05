import gql from 'graphql-tag';

const userSchema = gql`
  type User {
    id: String
    name: String
    email: String
  }

  extend type Query {
    user(id: String!): User
  }
`;

export default userSchema;
