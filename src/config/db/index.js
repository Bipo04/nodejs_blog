const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('test', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

const connection = async () => {
    sequelize.authenticate()
    .then(() => {
        console.log('connected..')
    })
    .catch(err => {
        console.log('Error'+ err)
    })
}

connection()