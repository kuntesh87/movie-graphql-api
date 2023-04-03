import { sequelize } from "../config/db.js";
import { Sequelize, Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes } from 'sequelize';
import { Review } from "./review.js";


interface UserModel extends Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>> {
  // Some fields are optional when calling UserModel.create() or UserModel.build()
  ID: CreationOptional<number>;
  EmailID: string;
  UserName: string;
  Password: string;
}

export const User = sequelize().define<UserModel>("user", {
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

