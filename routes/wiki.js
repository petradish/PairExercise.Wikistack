// const client = require("../db");
const express = require('express');
const router = express.Router();
const addPage = require('../views/addPage');
const { Page } = require('../models')
const wikipage = require('../views/wikipage')
const main = require('../views/main')

router.get('/', async (req, res, next) => {
    try {
      const pages = await Page.findAll();
      res.send(main(pages));
    } catch (error) {
        next(error);
    //   res.status(500).send(`Something went wrong: ${error}`);
    }
});

router.post('/', async (req, res) => {
    try {  
        const page = await Page.create({
        title: req.body.title,
        content: req.body.content,
        status: req.body.status
        
      });
        res.redirect(`/wiki/${page.slug}`);
      } catch (error) {
         console.log(error);
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

router.get('/:slug', async (req, res, next) => {
  try {
    const page = await Page.findOne({
      where: {
        slug: req.params.slug
      }
    });
    res.send(wikipage(page));
  } catch (next) {
      next (error);
  }
})

module.exports = router;