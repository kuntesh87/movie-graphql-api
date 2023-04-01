import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('movie', 'postgres', 'admin', {
    host: 'localhost',
    dialect: 'postgres'
});

export const testDbConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};
