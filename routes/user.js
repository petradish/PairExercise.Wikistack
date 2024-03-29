const express = require('express');
const router = express.Router();
const { Page, User } = require('../models');
const userList = require('../views/userList');
const userPages = require('../views/userPages');

router.get('/', async (req, res, next) => {
    try {
      const users = await User.findAll();
      res.send(userList(users));
    } catch (error) {
        next(error);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
    const user = await User.findByPk(req.params.id);
    const pages = await Page.findAll({
        where: {
            authorId: req.params.id
        }
        });
      res.send(userPages(user, pages));
    } catch (error) {
        next (error);
    }
  })
  

module.exports = router;