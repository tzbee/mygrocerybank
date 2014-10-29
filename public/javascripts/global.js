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

				var itemName, itemPrice, total = 0;
				var itemListContent = '';

				// Data row
				$.each(items, function(i,item){
					itemName = item.name != null ? item.name : '_';
					itemPrice = item.price != null ? item.price : 0;

					itemListContent += '<div class="row"><div class="col-xs-4">' + itemName + '</div><div cass="col-xs-4">' + itemPrice + '</div></div>';

					// Update total
					total += itemPrice;

				})

				// TOTAL row
				itemListContent += '<tr><td>TOTAL</td><td>' + total + '</td></tr>';

				itemListContent += '</table>';

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