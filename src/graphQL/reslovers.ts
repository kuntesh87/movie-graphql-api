
const resolvers = {
    Query: {
        async user(root, { id }, { models }) {
            return models.User.findById(id);
        },
        async allUser(root, args, { models }) {
            return models.User.findAll();
        },
        async allReviews(root, args, { models }) {
            return models.Review.findAll();
        },
        async review(root, { id }, { models }) {
            return models.Review.findById(id);
        },
        async allMovie(root, { id }, { models }) {
            return models.Movie.findAll();
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
                const user = await models.User.create({ ID: 2, EmailID, UserName, Password });
                return user;
            } catch (err) {
                console.log("error in createUser", err);
                return null;

            }
        }

    }
};

export default resolvers;  