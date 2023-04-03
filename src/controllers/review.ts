import { Review } from "../models/index.js";

export const updateReview = async (data, user) => {
    const { ID } = data;
    const updateReview = await Review.update({ ...data }, {
        where: {
            ID,
            UserID: user.ID
        }
    });
    return updateReview;
}