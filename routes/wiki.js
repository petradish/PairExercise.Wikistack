// const client = require("../db");
const express = require('express');
const router = express.Router();
const addPage = require('../views/addPage');
const { Page, User } = require('../models');
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
        const page = await Page.create(req.body);

        const [ user , wasCreated ] = await User.findOrCreate({
          where: {
            name: req.body.author,
            email: req.body.email
          }
        })

        // connects instances of page and user on authorId
        page.setAuthor(user);

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
    const user = await page.getAuthor();
    res.send(wikipage(page, user));
  } catch (error) {
      next (error);
  }
})

module.exports = router;