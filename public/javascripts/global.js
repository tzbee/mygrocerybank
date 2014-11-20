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
		$itemWindow = $('.itemWindow'),
		$items = $('#items'),

		supportsLocalStorage = typeof(Storage) !== "undefined";
			

		// Add an item to the system
		var addItem = function() {

			if(supportsLocalStorage) {

				var itemName = $itemName.val();
				var itemPrice = $itemPrice.val();
				var item = { name: itemName, price: itemPrice };

				var items;

				getAllItems(function(itemsFound) {
					items = itemsFound;
				});

				items.push(item);

				// Save to local storage
				localStorage.items = JSON.stringify(items);
			}

		};

		// Get all registered items
		var getAllItems = function(callback){
			if(!localStorage.items)	localStorage.items = '[]';

			var items = JSON.parse(localStorage.items);
			callback(items);
		};

		var renderItems = function(items) {
			var itemName, itemPrice, totalCount = 0,

				// Open table
				itemListContent = '<div class="table-responsive text-center item-text"><table class="table"><tbody>';

				// Data row
				$.each(items, function(i,item){
					itemName = item.name !== null ? item.name : '_';
					itemPrice = item.price !== null ? item.price : 0;
					itemListContent += '<tr><td>' + itemName + '</td><td>' + itemPrice + '</td></tr>';

					totalCount += itemPrice;
				})

				// Update total count
				$totalCount.html(totalCount);

				// Close table
				itemListContent += '</tbody></table></div>'
				
				// Render items
				$items.html(itemListContent);
		};

		var toggleItemWindow = function() {
			var attr = 'display';
			$itemWindow.css(attr, $itemWindow.css(attr)=='none' ? 'block' : 'none');
		};


		var getItemsAndRender = function() {
			getAllItems(function(items) {
				renderItems(items);
			});			
		};

		$addItemBtn.click(function() {
			addItem();
			getItemsAndRender();
		});

		// Get all items at startup and render them
		getItemsAndRender();
		toggleItemWindow();

	});