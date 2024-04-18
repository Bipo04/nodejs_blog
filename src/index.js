import express from 'express';
import path from 'path';
import route from './routes';
const handlebars = require('express-handlebars')
require('./config/db')
require('dotenv').config()

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