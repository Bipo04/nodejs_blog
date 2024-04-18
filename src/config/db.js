const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('Web', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
});

const connection = async () => {
    sequelize.authenticate()
    .then(() => {
        console.log('Connecting to database successfully!')
    })
    .catch(err => {
        console.log(err)
    })
}

connection()