const Router = require('express');
const path = require('path');

const route = Router();

route.set('views', path.join(__dirname, '../') + '/views');

route.get('/notUser', (req, res) => {
    res.render('pages/notUser');
})

route.post('/notUser', (req, res) => {
    return res.redirect('/')
})

module.exports = route;