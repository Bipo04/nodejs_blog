const productRouter = require('./products')
const sideRouter = require('./side')

function route(app) {
    app.use('/san-pham', productRouter)
    app.use('/', sideRouter)
}

module.exports = route