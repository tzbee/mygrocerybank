var express = require('express');
var router = express.Router();

/* GET Index page. */
router.get('/', function(req, res) {
	res.render('index', { title:'My grocery bank' });
});


module.exports = router;
