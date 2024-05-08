const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('iptv_db', 'root', 'Akkimessatsu2000', {
  host: '192.168.10.102',
  dialect: 'mysql',
})

const User = sequelize.define('users', {
  created: {
    type: Sequelize.DATE,
    allowNull: false,

  },
  updated: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  Username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  IsEnabled: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
  },
  DisplayName: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  EMail: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  Role: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  otp: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  deleted: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

sequelize.sync().then(() => {
  console.log('Database and tables synced');
}).catch(err => {
  console.error('Error syncing database:', err);
});

module.exports = User;
