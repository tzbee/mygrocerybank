var express = require('express');
var router = express.Router();


/* GET Index page. */
router.get('/',function(req,res){
	res.render('index',{title:'Da hello page!'});
});

/* GET all items. */
router.get('/items',function(req,res){
	var db = req.db;
	var collection = db.get('items');
	collection.find({},{},function(e,docs){
		res.json(docs);
	});
});


module.exports = router;
