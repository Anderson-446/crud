const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define('Task', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: DataTypes.STRING,
        status: DataTypes.ENUM('IN_PROGRESS', 'COMPLETED'),
        description: DataTypes.TEXT
    });

    return Task;
};