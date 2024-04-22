import express from 'express';
import path from 'path';
import route from './routes';
const handlebars = require('express-handlebars')
import { sequelize, connection} from './config/db'
require('dotenv').config()

connection()
const { QueryTypes, Sequelize, DATE } = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory:');

sequelize.query('SELECT * FROM `users`', {
  type: QueryTypes.SELECT,
})
.then(users => {
  console.log(users);
})
.catch(error => {
  console.error('Error executing custom query:', error);
});



const app = express()
const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname,'/public')))
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

// Template engin
app.engine('hbs', handlebars.engine({
    extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, '/views'))

route(app)

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`)
})