const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('androidtv_db', 'root', 'Akkimessatsu2000', {
  host: '192.168.10.102',
  dialect: 'mysql',
})

const Movies = sequelize.define('movies', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,

  },
  year: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cast: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  director: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  genre: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  imdb_rating: {
    type: Sequelize.DOUBLE,
    allowNull: true,
  },
  length: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  image_url: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  movie_url: {
    type: Sequelize.STRING,
    defaultValue: false,
  },
  trailer_url: {
    type: Sequelize.STRING,
    defaultValue: false,
  },
  isEnabled: {
    type: Sequelize.INTEGER,
    allowNull: true,
},
});

sequelize.sync().then(() => {
  console.log('Database and tables synced');
}).catch(err => {
  console.error('Error syncing database:', err);
});

module.exports = Movies;
