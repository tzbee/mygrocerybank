/** 	Global js file for myGroceryBank application
 ** 	@author touzbi
 **/

$(document).ready(function() {
		
		var
		
		// JQuery elements
		$addItemBtn = $('#addItemBtn'),
		$itemName = $('#itemName'),
		$messageLabel = $('#messageLabel'),
		$items = $('#items');
			
		// REST resourcess
		itemResourceURL = '/items';

		// Add an item to the system
		var addItem = function() {
			var itemName = $itemName.val();
			var item = { name: itemName };

			$.post(itemResourceURL, item).done(function(){
				$messageLabel.html('Item ' + itemName +' created');

				//Update item list at success 
				getAllItems();
			});


		};

		// Get all registered items
		var getAllItems = function(){
			$.get(itemResourceURL, function(items){
				var itemListContent = '<ul>';

				$.each(items, function(i,item){
					itemListContent += '<li>' + item.name +'</li>'
				})

				itemListContent += '</ul>';

				$items.html(itemListContent);
			});
		}

		$addItemBtn.click(function() {
			addItem();
		});

		// Get all items at startup
		getAllItems();
	});