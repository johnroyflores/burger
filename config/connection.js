var mysql = require('mysql');


var connection = mysql.createConnection({
    host: '',
    port: 3306,
    user: '',
    password: '',
    database: ''
});

module.exports = connection;