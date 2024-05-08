const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('androidtv_db', 'root', 'Akkimessatsu2000', {
    host: '192.168.10.102',
    dialect: 'mysql',
})



const Hardware = sequelize.define('hardware', {
    type: {
        type: Sequelize.STRING,
        allowNull: false,

    },
  
   
    
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    firmware: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    mac: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    IP: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    isEnabled: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    isOnline: {
        type: Sequelize.INTEGER,
        allowNull: true,
    }, 
        
         
    });
    



sequelize.sync().then(() => {
    console.log('Database and tables synced');
}).catch(err => {
    console.error('Error syncing database:', err);
});

module.exports = Hardware;