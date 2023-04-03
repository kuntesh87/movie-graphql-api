const typeDefs = `#graphql
  type User {
    ID: Int!
    EmailID: String!
    UserName: String!
    token: String!
  }

  type Review {
    ID: Int,
    RatingID: Int,
    Comment: String,
    UserID: Int,
    MovieID: Int,
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
    allUser: [User!]!
    allReviews: [Review!]!
    review(id: Int!): Review
    allMovie: [Movie!]!
  }

  type Mutation {
    login(UserName: String!, Password: String!): User!,
    signUp(UserName: String!, EmailID: String!, Password: String!): User!
    createReview(RatingID: Int, Comment: String, UserID: Int,MovieID: Int): Review!
    createMovie(MovieName: String,Description: String,DirectorName: String,ReleaseDate: String): Movie!
  }
`;

export default typeDefs;