import db from "../config/db";
import { DataTypes } from 'sequelize';
import Review from "./review";

const User = db.sequelize.define("user", {
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