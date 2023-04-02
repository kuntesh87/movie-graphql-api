import { sequelize } from "../config/db.js";
import { DataTypes } from 'sequelize';
import { Review } from "./review.js";

export const Movie = sequelize().define("movie", {
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

const movie = {
  ID: '1',
  MovieName: 'test',
  Description: "Test Description",
  DirectorName: 'Kuntesh',
  ReleaseDate: new Date()
}
Movie.findOrCreate({
  where: { ID: movie.ID },
  defaults: {
    ...movie
  }
});

Movie.sync({ alter: true });