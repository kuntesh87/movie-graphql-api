import { sequelize } from "../config/db.js";
import { DataTypes } from 'sequelize';
import { Review } from "./review.js";

export const Movie = sequelize().define("movie", {
  ID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
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

Movie.sync({ alter: true });