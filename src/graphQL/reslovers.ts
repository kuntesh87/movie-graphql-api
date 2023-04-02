
const resolvers = {
    Query: {
        async user(root, { id }, { models }) {
            return models.User.findById(id);
        },
        async allReviews(root, args, { models }) {
            return models.Review.findAll();
        },
        async review(root, { id }, { models }) {
            return models.Review.findById(id);
        },
    },
  };

export default resolvers;  