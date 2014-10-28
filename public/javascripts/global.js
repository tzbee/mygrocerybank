var mgb = {};

(function(window,document,$){

	var $addItemBtn = $('#addItemBtn'),
		$itemName = $('#itemName'),
		$messageLabel = $('#messageLabel'),
		itemResourceURL = '/items';

	mgb.addItem = function(){
		// XXX To fix

		var itemName = $itemName.value()

		$.post(itemResourceURL,{name: itemName}).done(function(){
			messageLabel.html('Item ' + itemName +' created');
		});

	};

	$(document).ready(function(){
		// XXX To fix
		$addItemBtn.click(function(e){
			console.log('HEOOOO');
		});

	});


})(window,document,jQuery);