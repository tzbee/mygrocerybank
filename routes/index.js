var express = require('express');
var router = express.Router();


/* GET Index page. */
router.get('/',function(req,res){
	res.render('index',{title:'Da hello page!'});
});

/* GET all users. */
router.post('/items',function(req,res){
	var db = req.db;
	var collection = db.get('usercollection');
	collection.find({},{},function(e,docs){
		res.render('userlist',{
			"userlist":docs
		});
	});
});


module.exports = router;
