const express = require('express');
const tagRoutes = require('./routes/tagRoutes');
const taskRoutes = require('./routes/taskRoutes');
const models = require('./models');


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/tasks', taskRoutes);
app.use('/tags', tagRoutes);

app.listen(3000, () => {
    console.log('running on port 3000');
});

app.get('/', (req, res) => {
    res.send('Hello World')
})