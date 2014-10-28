var express = require('express');
var router = express.Router();


/* GET Index page. */
router.get('/',function(req,res){
	res.render('index',{title:'Da hello page!'});
});

/* GET all items. */
router.get('/items',function(req,res){
	// STUB
	// TODO
	res.json({"name":"Henry"});
});

/* POST create item. */
router.post('/items',function(req,res){
	// STUB
	// TODO
	res.send('Creating item named ' + req.body.name);
});

module.exports = router;
