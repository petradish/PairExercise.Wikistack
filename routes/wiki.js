// const client = require("../db");
const express = require("express");
const router = express.Router();
const addPage = require('../views/addPage');

router.get('/', (req, res) => {
    try {
    //   const data = await client.query(baseQuery);
      res.send('This is the Wiki Page.');
    } catch (error) {
        next(error);
    //   res.status(500).send(`Something went wrong: ${error}`);
    }
});

router.post('/', (req, res, next) => {
    try {
    //   const data = await client.query(baseQuery);
      res.send('This is the Wiki Post Page.');
    } catch (next) {
        next(error);
    //   res.status(500).send(`Something went wrong: ${error}`);
    }
});

router.get('/add', (req, res, next) => {
    try {
    //   const data = await client.query(baseQuery);
      res.send(addPage());
    } catch (next) {
        next(error);
    //   res.status(500).send(`Something went wrong: ${error}`);
    }
});

module.exports = router;