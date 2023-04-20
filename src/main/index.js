const express = require('express');
const path = require('path');
const port = parseArg();
const app = express();

// Включение сервера
app.use(express.static(path.join(__dirname, 'public')));
app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/ui/index.html`);
});
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