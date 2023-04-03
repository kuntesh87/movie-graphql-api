
const resolvers = {
    Query: {
        async user(root, { id }, { models }) {
            return models.User.findById(id);
        },
        async allUser(root, args, { models }) {
            return models.User.findAll({
                include: models.Review
            });
        },
        async allReviews(root, args, { models }) {
            return models.Review.findAll({
                include: models.Review
            });
        },
        async review(root, { id }, { models }) {
            return models.Review.findById(id);
        },
        async allMovie(root, { id }, { models }) {
            return models.Movie.findAll({
                include: models.Review
            });
        },
    },
    Mutation: {
        login: async (root, { email }, { models }) => {
            const user = await models.User.findOne({ email });
            if (user) {
                user.token = Buffer.from(email).toString('base64');
                return user;
            }
        },
        createUser: async (root, { EmailID, UserName, Password }, { models }) => {
            try {
                const user = await models.User.create({ EmailID, UserName, Password });
                return user;
            } catch (err) {
                console.log("error in createUser", err);
                return null;

            }
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
        }

    }
};

export default resolvers;  