const Router = require('express');
const path = require('path');

const route = Router();

route.set('views', path.join(__dirname, '../') + '/views');

route.get('/user', (req, res) => {
    res.render('pages/user');
});

route.post('/user', (req, res) => {
    return res.redirect('/')
});

module.exports = route;