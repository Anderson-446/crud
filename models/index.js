const Task = require ('./task');
const Tag = require ('./tag');

Task.belongsToMany(Task, { through: 'TaskTag' });
Tag.belongsToMany(Tag, { through: 'TaskTag' });