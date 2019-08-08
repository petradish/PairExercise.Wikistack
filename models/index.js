<<<<<<< HEAD
const Sequelize =
=======
const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
    logging: false
});

const Page = db.define('page', {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    content: {
        type: Sequelize.TEXT,
        default: 'Content goes here.',
        allowNull: false
    },
    status: {
        type: Sequelize.ENUM('open', 'closed')
    }
  });

  const User = db.define('user', {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
          notEmpty: true
      }
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    }
  });

module.exports = {
  db,
  Page,
  User
}
>>>>>>> d486399fd76200f23141bfe9bd95608f24a39233
