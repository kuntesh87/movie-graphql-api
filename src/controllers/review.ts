import { Review } from "../models/index.js";

export const updateReview = async (data) => {
    const { ID } = data;
    const updateReview = await Review.update({ ...data }, {
        where: {
            ID
        }
    });
    return updateReview;
}