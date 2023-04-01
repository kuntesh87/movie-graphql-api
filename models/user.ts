import {  sequelize as sq } from "../config/db";
import { DataTypes } from 'sequelize';
import Review from "./review";

const User = sq.define("user", {
  ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
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

User.hasMany(Review, {
  foreignKey: 'UserID'
})

User.sync({ alter: true })

export default User;