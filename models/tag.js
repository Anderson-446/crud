const { DataTypes } = require("sequelize");


module.exports = (sequelize, DataTypes) => {
    const Tag = sequelize.define('Tag', {
        id: {

        },
        name: DataTypes.STRING,
        color: DataTypes.STRING
    });

    return Tag;
};