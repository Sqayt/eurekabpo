const
    iconv = require('iconv-lite'),
    { exec } = require('child_process')

const exec_net_user = (callback) => {
    exec('net user', {encoding: 'buffer'},
        (error, stdout, stderr) => {
            if (error) {
                callback(stderr, null);
            } else {
                callback(null, iconv.decode(stdout, 'CP866'));
            }
        }
    );
}

const users = (callback) => {
    (exec_net_user((err, res) => {
        if (err) {
            console.log(`Error: ${err}`);
        } else {
            callback(res
                .slice(res.search(/-{79}/) + 79, res.indexOf('Команда выполнена успешно'))
                .match(/([A-Za-zА-Яа-я0-9_\-]+)/g)
            );
        }
    }));
}

module.exports.getMessage = users;