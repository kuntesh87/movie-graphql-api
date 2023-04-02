const typeDefs = `#graphql
  type User {
    id: Int!
    name: String!
    email: String!
  }

  type Review {
    ID: Int,
    RatingID: Int,
    Comment: String,
  }

  type Movie {
    ID: Int,
    MovieName: String,
    Description: String,
    DirectorName: String,
    ReleaseDate: String,
    reviews: [Review]
}
  type Query {
    user(id: Int!): User
    allReviews: [Review!]!
    review(id: Int!): Review
    allMovie: [Movie!]!
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