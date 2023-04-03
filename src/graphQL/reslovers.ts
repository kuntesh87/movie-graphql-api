import { updateMovie, searchedMovies } from "../controllers/movie.js";
import { updateReview } from "../controllers/review.js";
import { login, signUp, changePassword } from "../controllers/user.js";
import { GraphQLError } from 'graphql';

const resolvers = {
    Query: {
        async allReviewsByMovie(root, { MovieID }, { models }) {
            return models.Review.findAll({
                where: {
                    MovieID
                }
            });
        },
        async review(root, { ID }, { models }) {
            return models.Review.findById(ID);
        },
        async allMovie(root, args, { models }) {
            return models.Movie.findAll({
                include: models.Review
            });
        },
        async searchMovie(root, args, { models }) {
            const movies = await searchedMovies(args);
            return movies;
        },
        async movie(root, { ID }, { models }) {
            return models.Movie.findById(ID);
        },
    },
    Mutation: {
        signUp: async (root, args, { models }) => {
            try {
                const user = await signUp(args);
                return user;
            } catch (err) {
                console.log("error in createUser", err);
                return null;

            }
        },
        login: async (root, args, { models }) => {
            const user = await login(args);
            return user;
        },
        changePassword: async (root, args, { models }) => {
            const user = await changePassword(args);
            return user;
        },
        createReview: async (root, { ID, RatingID, Comment, UserID, MovieID }, { models, user }) => {
            if (!user)

                // throwing a `GraphQLError` here allows us to specify an HTTP status code,

                // standard `Error`s will have a 500 status code by default

                throw new GraphQLError('User is not authenticated', {

                    extensions: {

                        code: 'UNAUTHENTICATED',

                        http: { status: 401 },

                    },

                });
            try {
                const review = await models.Review.create({ ID, RatingID, Comment, UserID, MovieID });
                return review;
            } catch (err) {
                console.log("error in createReview", err);
                return null;

            }
        },
        createMovie: async (root, { MovieName, Description, DirectorName, ReleaseDate }, { models, user }) => {
            if (!user)

                // throwing a `GraphQLError` here allows us to specify an HTTP status code,

                // standard `Error`s will have a 500 status code by default

                throw new GraphQLError('User is not authenticated', {

                    extensions: {

                        code: 'UNAUTHENTICATED',

                        http: { status: 401 },

                    },

                });

            try {
                const movie = await models.Movie.create({ MovieName, Description, DirectorName, ReleaseDate });
                return movie;
            } catch (err) {
                console.log("error in createMovie", err);
                return null;

            }
        },
        updateMovie: async (root, args, { models, user }) => {
            if (!user)

                // throwing a `GraphQLError` here allows us to specify an HTTP status code,

                // standard `Error`s will have a 500 status code by default

                throw new GraphQLError('User is not authenticated', {

                    extensions: {

                        code: 'UNAUTHENTICATED',

                        http: { status: 401 },

                    },

                });
            try {
                const movie = await updateMovie(args);
                return movie;
            } catch (err) {
                console.log("error in updateMovie", err);
                return null;

            }
        },
        deleteMovie: async (root, { ID }, { models, user }) => {
            if (!user)

                // throwing a `GraphQLError` here allows us to specify an HTTP status code,

                // standard `Error`s will have a 500 status code by default

                throw new GraphQLError('User is not authenticated', {

                    extensions: {

                        code: 'UNAUTHENTICATED',

                        http: { status: 401 },

                    },

                });
            try {
                const deletedMovie = await models.Movie.destroy({
                    where: {
                        ID: ID
                    }
                });
                return deletedMovie;
            } catch (err) {
                console.log("error in deleteMovie", err);
                return null;

            }
        },
        updateReview: async (root, args, { models, user }) => {
            if (!user)

                // throwing a `GraphQLError` here allows us to specify an HTTP status code,

                // standard `Error`s will have a 500 status code by default

                throw new GraphQLError('User is not authenticated', {

                    extensions: {

                        code: 'UNAUTHENTICATED',

                        http: { status: 401 },

                    },

                });
            try {
                const movie = await updateReview(args,user);
                return movie;
            } catch (err) {
                console.log("error in updateMovie", err);
                return null;

            }
        },
        deleteReview: async (root, { ID }, { models, user }) => {
            if (!user)

                // throwing a `GraphQLError` here allows us to specify an HTTP status code,

                // standard `Error`s will have a 500 status code by default

                throw new GraphQLError('User is not authenticated', {

                    extensions: {

                        code: 'UNAUTHENTICATED',

                        http: { status: 401 },

                    },

                });
            try {
                const deletedReview = await models.Review.destroy({
                    where: {
                        ID: ID
                    }
                });
                return deletedReview;
            } catch (err) {
                console.log("error in deleteReview", err);
                return null;

            }
        },


    }
};

export default resolvers;  