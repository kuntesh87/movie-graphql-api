import { updateMovie } from "../controllers/movie.js";
import { updateReview } from "src/controllers/review.js";

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
        async movie(root, { ID }, { models }) {
            return models.Movie.findById(ID);
        },
    },
    Mutation: {
        signUp: async (root, { EmailID, UserName, Password }, { models }) => {
            try {
                const user = await models.User.create({ EmailID, UserName, Password });
                return user;
            } catch (err) {
                console.log("error in createUser", err);
                return null;

            }
        },
        login: async (root, { UserName, Password }, { models }) => {

        },
        createReview: async (root, { ID, RatingID, Comment, UserID, MovieID }, { models }) => {
            try {
                const review = await models.Review.create({ ID, RatingID, Comment, UserID, MovieID });
                return review;
            } catch (err) {
                console.log("error in createReview", err);
                return null;

            }
        },
        createMovie: async (root, { MovieName, Description, DirectorName, ReleaseDate }, { models }) => {
            try {
                const movie = await models.Movie.create({ MovieName, Description, DirectorName, ReleaseDate });
                return movie;
            } catch (err) {
                console.log("error in createMovie", err);
                return null;

            }
        },
        updateMovie: async (root, args, { models }) => {
            try {
                const movie = await updateMovie(args);
                return movie;
            } catch (err) {
                console.log("error in updateMovie", err);
                return null;

            }
        },
        deleteMovie: async (root, { ID }, { models }) => {
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
        updateReview: async (root, args, { models }) => {
            try {
                const movie = await updateReview(args);
                return movie;
            } catch (err) {
                console.log("error in updateMovie", err);
                return null;

            }
        },
        deleteReview: async (root, { ID }, { models }) => {
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