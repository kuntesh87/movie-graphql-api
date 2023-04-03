import { sequelize } from "../config/db.js";
import { DataTypes } from 'sequelize';
import { Movie } from "./movie.js";
import { User } from "./user.js";

export const Review = sequelize().define("review", {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    RatingID: {
        type: DataTypes.INTEGER,
    },
    Comment: {
        type: DataTypes.STRING,
    },
});

Review.belongsTo(Movie, {
    foreignKey: 'MovieID'
});
Review.belongsTo(User, {
    foreignKey: 'UserID'
});
User.hasMany(Review, {
    foreignKey: 'UserID'
});
Movie.hasMany(Review, {
    foreignKey: 'MovieID'
});
Review.sync({ alter: true })


