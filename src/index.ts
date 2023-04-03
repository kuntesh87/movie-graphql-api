import * as dotenv from 'dotenv';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import * as models from './models/index.js';
import resolvers from "./graphQL/reslovers.js";
import typeDefs from './graphQL/schema.js';
import { getUserByToken } from './controllers/user.js';

dotenv.config();

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async ({ req }) => {

    // get the user token from the headers

    const token = req.headers.authorization || '';

    let user = null;
    // try to retrieve a user with the token
    if (token) {
      user = await getUserByToken(token);
    }

    return { user, models }
  },
});

console.log(`🚀  Server ready at: ${url}`);