import { Movie } from "../models/index.js";
import { Op } from 'sequelize';


export const updateMovie = async (data) => {
    const { ID } = data;
    const updateMovie = await Movie.update({ ...data }, {
        where: {
            ID
        }
    });
    return updateMovie;
}

export const searchedMovies = async (data) => {
    const { SearchText, offset, limit } = data;
    const movies = await Movie.findAll({
        where: {
            [Op.or]: [
                { MovieName: { [Op.like]: SearchText } },
                { Description: { [Op.like]: SearchText } }
            ]
        },
        offset, limit
    });
    return movies;
}