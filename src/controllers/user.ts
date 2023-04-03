import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/index.js";


const saltRounds = 10;

export const signUp = async ({ EmailID, UserName, Password }) => {
    const passwordHash = await bcrypt.hash(Password, saltRounds);
    const user = await User.create({ EmailID, UserName, Password: passwordHash });
    return user;
}

export const login = async ({ EmailID, Password }) => {
    let user = await User.findOne({
        where: {
            EmailID
        }
    });

    const isPasswordCorrect = await bcrypt.compare(Password, user.Password);
    if (isPasswordCorrect) {
        const Token = jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60),
            data: EmailID
        }, process.env.JWT_SECRET);

        return {
            EmailID,
            Token
        }
    }
}

export const getUserByToken = async (token: string) => {
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    const EmailID = decoded.data;
    const userFromDB = await User.findOne({
        where: {
            EmailID
        }
    })
    return userFromDB;
}
export const changePassword = async ({ UserName, CurrentPassword, NewPassword }) => {

    let user = await User.findOne({
        where: {
            UserName
        }
    });

    const isPasswordCorrect = await bcrypt.compare(CurrentPassword, user.Password);
    if (isPasswordCorrect) {
        const passwordHash = await bcrypt.hash(NewPassword, saltRounds);
        const updateUser = await User.update({ Password: passwordHash }, {
            where: {
                UserName: UserName
            }
        });

        return {
            message: "Updated Password!"
        }

    }
    else {
        return {
            message: "Wrong Username and Password Combination! Try Again!"
        }
    }
}

