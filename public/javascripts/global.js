/** 	Global js file for myGroceryBank application
 ** 	@author touzbi
 **/

$(document).ready(function() {
		
		var
		
		// JQuery elements
		$addItemBtn = $('#addItemBtn'),
		$itemName = $('#itemName'),
		$itemPrice = $('#itemPrice'),
		$messageLabel = $('#messageLabel'),
		$totalCount = $('#total'),
		$items = $('#items');
			
		// REST resources
		itemResourceURL = '/items';

		// Add an item to the system
		var addItem = function() {
			var itemName = $itemName.val();
			var itemPrice = $itemPrice.val();
			var item = { name: itemName, price: itemPrice };

			$.post(itemResourceURL, item).done(function(){
				$messageLabel.html('Item ' + itemName +' created');

				//Update item list at success 
				getAllItems();
			});


		};

		// Get all registered items
		var getAllItems = function(){
			$.get(itemResourceURL, function(items) {

				var itemName, itemPrice, totalCount = 0,
					itemListContent = '<div class="table-responsive text-center item-text"><table class="table"><tbody>';

				// Data row
				$.each(items, function(i,item){
					itemName = item.name != null ? item.name : '_';
					itemPrice = item.price != null ? item.price : 0;
					itemListContent += '<tr><td>' + itemName + '</td><td>' + itemPrice + '</td></tr>';

					totalCount += itemPrice;
				})

				// update total count
				$totalCount.html(totalCount);

				// Close table
				itemListContent += '</tbody></table></div>'
				
				// Render element content
				$items.html(itemListContent);
			});
		}

		$addItemBtn.click(function() {
			addItem();
		});

		// Get all items at startup
		getAllItems();
	});