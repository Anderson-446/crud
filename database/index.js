
const Sequelize = require('sequelize');

const sequelize = new Sequelize('crud', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres',
    logging: console.log
  });

module.exports = sequelize;
