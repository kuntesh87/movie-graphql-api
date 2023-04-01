import { sequelize as sq } from "../config/db";
import { DataTypes } from 'sequelize';
import Review from "./review";

const Movie = sq.define("movie", {
  ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  MovieName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Description: {
    type: DataTypes.STRING,
  },
  DirectorName: {
    type: DataTypes.STRING,
  },
  ReleaseDate: {
    type: DataTypes.DATE,
  },
});

Movie.hasMany(Review, {
  foreignKey: 'MovieID'
})

Movie.sync({ alter: true })
export default Movie;