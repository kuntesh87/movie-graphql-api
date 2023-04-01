import Movie from "../models/movie";


export const getMovieByID = () => {

}


export const getAllMovies = async () => {
    const resFromDb = await Movie.findAll();
    return resFromDb;
}