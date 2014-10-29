var express = require('express');
var router = express.Router();
var Item = require('../models/Item.js');


/* GET Index page. */
router.get('/', function(req,res){
	res.render('index', { title:'My grocery bank' });
});

/* GET all items. */
router.get('/items', function(req, res){

	Item.find(function(err, items){
		if (err)
			res.send(err);

		res.json(items);
	});
});

/* POST create item. */
router.post('/items', function(req,res){
	var item = new Item();

	item.name = req.body.name
	item.price = req.body.price

	item.save(function(err){
		if(err)
			res.send(err);

		res.send('Item ' + item.name + ' created');
	});

});

module.exports = router;
