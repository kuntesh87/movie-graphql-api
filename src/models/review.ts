import { sequelize} from "../config/db.js";
import { DataTypes } from 'sequelize';

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

Review.sync({ alter: true })


