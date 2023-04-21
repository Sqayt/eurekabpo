const express = require('express');
const port = parseArg();

const home_route = require('./routes/homeRoute')
const user_route = require('./routes/userRoute')
const not_user_route = require('./routes/notUserRoute')

// Включение сервера
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

// Прописываю маршуртизацию
app.use(home_route);
app.use(user_route);
app.use(not_user_route)

app.listen(port, () => {
    console.log(`Веб приложение запущено на http://localhost:${port}`);
});

// Парсинг аргументов
function parseArg() {
    const yargs = require('yargs');

    yargs.usage('Usage: $0 --port [num]')
        .version('1.0.0')
        .option('p', {
            alias: 'port',
            descride: "This is port connect",
            type: 'number',
            default: 337,
            nargs: 1,
        })
        .help('h')
        .alias('h', 'help')
        .alias('v', 'version')
        .epilog('Copyright 2023')
        .example('$0 --port 442',
            'Server connect on the port')
        .argv;

    const port = yargs.argv['port'];

    return typeof port === 'number' ? port : 337;
}