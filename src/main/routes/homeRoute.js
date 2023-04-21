const Router = require('express');
const path = require('path');
const users = require("../logic/windows/users");

const route = Router();

route.set('views', path.join(__dirname, '../') + '/views');

route.get('/', (req, res) => {
    res.render('pages/index');
});

route.post('/', (req, res) => {
    let username = req.body.username;

    if (username === "" || users.getMessage(callback => callback.include(username))) {
        return res.redirect('/notUser');
    } else {
        return res.redirect('/user');
    }
});

module.exports = route;