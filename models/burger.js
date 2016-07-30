
var orm = require('../config/orm.js');


var burger = {
    selectAll: function(cb) {
        orm.selectAll(function(res) {
            cb(res);
        });
    },
    insertOne: function(burger, wasDevoured, cb) {
        orm.insertOne(burger, wasDevoured, function(res) {
            cb(res);
        });
    },
    updateOne: function(identify, devoured, cb) {
        orm.updateOne(identify, wasDevoured, function(res) {
            cb(res);
        });
    }
}

module.exports = burger;
