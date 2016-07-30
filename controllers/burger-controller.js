var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

router.get('/', function(req,res) {
	res.redirect('/burgers')
});


router.get('/burgers', function(req, res){
	burger.selectAll(function(data){
		console.log({burgers: data});
		res.render('index', {burgers: data});
	})
});

router.post('/burgers/insert', function(req, res){
	burger.insertOne(req.body.burger_name, req.body.devoured, function(data){
		res.redirect('/burgers')
	})
});

router.put('/burgers/update/:id', function(req, res){
	var identify = 'id=' + req.params.id;
	// this needs to be fixed all the way through the pipe
	burger.updateOne(identify, req.body.devoured,function(data){
		res.redirect('/burgers');
	})
});

module.exports = router;