const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const path = require('path')
const route = require('./routes')
require('./config/db')


const app = express()
const port = 3000

app.use(express.static(path.join(__dirname,'/public')))
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

// HTTP logger
// app.use(morgan('combined'))

// Template engin
app.engine('hbs', handlebars.engine({
    extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, '/resources/views'))

route(app)

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`)
})