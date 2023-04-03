const typeDefs = `#graphql
  type User {
    ID: Int!
    EmailID: String!
    UserName: String!
  }
  type LoginedUser {
    Token: String!
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
    review(ID: Int!): Review
    allMovie: [Movie!]!
    movie(ID: Int!): Movie
    allReviewsByMovie(MovieID: Int!): [Review!]!
  }

  type Mutation {
    login(UserName: String!, Password: String!): LoginedUser!,
    signUp(UserName: String!, EmailID: String!, Password: String!): User!
    createMovie(MovieName: String,Description: String,DirectorName: String,ReleaseDate: String): Movie!
    updateMovie(ID: String!,MovieName: String,Description: String,DirectorName: String,ReleaseDate: String): Movie!
    deleteMovie(ID: String!)
    createReview(RatingID: Int, Comment: String, UserID: Int,MovieID: Int): Review!
    updateReview(RatingID: Int, Comment: String, UserID: Int,MovieID: Int): Movie!
    deleteReview(ID: String!)
  }
`;

export default typeDefs;