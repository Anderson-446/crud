const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define('task', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING
        },
        status: {
            type: DataTypes.ENUM('IN_PROGRESS', 'COMPLETED')
        },
        description: {
            type: DataTypes.TEXT
        },
    });

    // Task.associate = function(models) {
    //     Task.belongsToMany(models.Tag, {through: 'task_tag', foreignKey: 'task_id'})
    //   };

    // Task.sync({
    //     force: false
    // })

    return Task;
};