import db from "../config/db";
import { DataTypes } from 'sequelize';

const Review = db.sequelize.define("review", {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    RatingID: {
        type: DataTypes.INTEGER,
    },
    Comment: {
        type: DataTypes.STRING,
    },

});

Review.sync({ alter: true })


export default Review;