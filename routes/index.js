var express = require('express');
var router = express.Router();


/* GET Index page. */
router.get('/',function(req,res){
	res.render('index',{title:'Da hello page!'});
});

/* GET all items. */
router.get('/items',function(req,res){
	// STUB
	res.json({"name":"Henry"});
});


module.exports = router;
