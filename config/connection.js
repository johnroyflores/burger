var mysql = require('mysql');


var connection = mysql.createConnection({
    host: 'q3vtafztappqbpzn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: 3306,
    user: 'lfxpmtjt53zelq4z',
    password: 'jq43zph0qkcz7q6l',
    database: 'c3cljfr5na2t2am3'
});

module.exports = connection;