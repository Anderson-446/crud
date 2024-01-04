const { DataTypes } = require("sequelize");
const task = require("./task");
const sequelize = require("../database");

module.exports = (sequelize, DataTypes) => {
    const Tag = sequelize.define('tag', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING
        },
        color: {
            type: DataTypes.STRING
        },
    });

    // Tag.associate = function(models) {
    //     Tag.belongsToMany(models.Task, {through: 'task_tag', foreignKey: 'tag_id'})
    //   };

    return Tag;
};