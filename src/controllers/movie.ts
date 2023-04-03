import { Movie } from "src/models/index.js";


export const updateMovie = async (data) => {
    const { ID } = data;
    const updateMovie = await Movie.update({ ...data }, {
        where: {
            ID
        }
    });
    return updateMovie;
}