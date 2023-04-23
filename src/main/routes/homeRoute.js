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

    users.getMessage((user) => {
        if (user.includes(username)) {
            return res.redirect("/user");
        } else {
            return res.redirect("/notUser");
        }
    })
});

module.exports = route;