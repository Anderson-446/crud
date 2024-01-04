const Task = require ('./task');
const Tag = require ('./tag');
const task_tag = require ('./task_tag.js');
const sequelize = require('../database/index.js');

const models = {
    Task,
    Tag,
    task_tag
}

for (let key in models) {
    if (models.hasOwnProperty("associate")) {
        models[key].associate(models);
        
    }
}

sequelize.sync({
    force: false
})

module.exports = models