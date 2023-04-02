const typeDefs = `#graphql
  type User {
    id: Int!
    name: String!
    email: String!
    reviews: [Review!]!
  }

  type Review {
    id: Int!
    title: String!
    ingredients: String!
    direction: String!
    user: User!
  }

  type Query {
    user(id: Int!): User
    allReviews: [Review!]!
    Review(id: Int!): Review
  }

  type Mutation {
    createUser(name: String!, email: String!, password: String!): User!
    createReview(
      userId: Int!
      title: String!
      ingredients: String!
      direction: String!
    ): Review!
  }
`;

export default typeDefs;