const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();

const layout = require('./views/layout');
const { db } = require('./models');
const models = require('./models');

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.use('/wiki', require('./routes/wiki'));
app.use('/users', require('./routes/user'));


app.get('/', (req, res, next) => {
    res.send(layout('Hi there!'));
});

db.authenticate().
then(() => {
  console.log('connected to the database');
});

const init = async() => {
    await models.db.sync({force: true});
    app.listen(3000, () => {
        console.log(`App listening in port 3000`);
    });
};

init();