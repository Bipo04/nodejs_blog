class SideController {
    index (req, res) {
        res.render('home')
    }
}

module.exports = new SideController