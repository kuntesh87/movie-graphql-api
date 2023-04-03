import { sequelize} from "../config/db.js";
import { DataTypes } from 'sequelize';
import { Review } from "./review.js";

export const User = sequelize().define("user", {
  ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  EmailID: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  UserName: {
    type: DataTypes.STRING,
  },
  Password: {
    type: DataTypes.STRING,
  },
});

User.sync({ alter: true })

