const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Task_tag = sequelize.define('task_tag', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
    });

    // Task_tag.associate = function(models) {
    //     Task_tag.belongsTo(models.Tag, {foreignKey: 'tag_id'})
    //     Task_tag.belongsTo(models.Task, {foreignKey: 'task_id'})
    //   };
    
    return Task_tag;
};