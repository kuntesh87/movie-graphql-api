import { Sequelize } from 'sequelize';


const sequelize = () => {
    return new Sequelize('movie', 'postgres', 'admin', {
        host: 'localhost',
        dialect: 'postgres'
    });
}

const testDbConnection = async () => {
    try {
        await sequelize().authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};

export {
    sequelize, testDbConnection
}