/** 	Global js file for myGroceryBank application
 ** 	@author touzbi
 **/

(function(window, document, $) {
	$(document).ready(function() {
		
		var
		
		// JQuery elements
		$addItemBtn = $('#addItemBtn'),
		$itemName = $('#itemName'),
		$messageLabel = $('#messageLabel'),
			
		// REST resourcess
		itemResourceURL = '/items';

		// Add an item to the system
		var addItem = function() {
			var itemName = $itemName.val();
			var item = { name: itemName };

			$.post(itemResourceURL, item).done(function(){
				$messageLabel.html('Item ' + itemName +' created');
			});

		};

		$addItemBtn.click(function() {
			addItem();
		});

	});

})(window, document, jQuery);