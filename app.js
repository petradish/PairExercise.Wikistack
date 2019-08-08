const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const layout = require('./views/layout');

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

// app.use('/', require('./views/layout'));

app.get('/', (req, res, next) => {
    res.send(layout('Hi there!'));
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});