var connection = require('./connection.js');


var orm = {
    selectAll: function(cb) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, result) {
            cb(result);
        })
    },
    insertOne: function(burger, wasDevoured, cb) {
        console.log(burger + "   " + wasDevoured);
        var queryString = "INSERT INTO burgers (`burger_name`, devoured) VALUES ('" + burger + "', " + wasDevoured + ");";
        console.log(queryString);
        connection.query(queryString, function(err, result) {
            cb(result);
        })
    },
    updateOne: function(location, wasDevoured, cb) {
        var queryString = "UPDATE burgers SET devoured=" + wasDevoured + " WHERE " + location;
        console.log(queryString);
        connection.query(queryString, function(err, result) {
            cb(result);
        })
    }
}

module.exports = orm;