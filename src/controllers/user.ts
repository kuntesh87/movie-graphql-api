import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "src/models/user.js";


const saltRounds = 10;

export const signUp = async ({ EmailID, UserName, Password }) => {

    const passwordHash = await bcrypt.hash(Password, saltRounds);
    const user = await User.create({ EmailID, UserName, Password: passwordHash });
    return user;
}

export const login = async ({ UserName, Password }) => {
    let user = await User.findOne({
        where: {
            UserName
        }
    });

    const isPasswordCorrect = await bcrypt.compare(Password, user.Password);
    if (isPasswordCorrect) {
        const Token = jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60),
            data: UserName
        }, process.env.JWT_SECRET);

        return {
            UserName,
            Token
        }
    }
}

export const verifyToken = ({ token }) => {

    try {
        const verify = jwt.verify(token, process.env.JWT_SECRET);
        console.log("verify token", token);
        return true;
    } catch (error) {
        console.log("Error in Verify Token");
        return false;
    }

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

