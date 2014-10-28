var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET Hello page. */
router.get('/hello',function(req,res){
	res.render('hello',{title:'Da hello page!'});
});

/* GET all users. */
router.get('/users',function(req,res){
	var db = req.db;
	var collection = db.get('usercollection');
	collection.find({},{},function(e,docs){
		res.render('userlist',{
			"userlist":docs
		});
	});
});


module.exports = router;
