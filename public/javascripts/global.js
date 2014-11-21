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
		$items = $('.items'),

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
			var itemName, itemPrice,

				// Open table
				itemListContent = '<ul>';

				// Data row
				$.each(items, function(i,item){
					itemName = item.name !== null ? item.name : '_';
					itemPrice = item.price !== null ? item.price : 0;
					itemListContent += '<li class="item"' + 
										'data-item="' + itemName + '"' + 
										'>' + '<span class="fa fa-camera-retro fa-5x item-icon"></span>' + '</li>';
				})

				// Close table
				itemListContent += '</ul>'
				
				// Render items
				$items.html(itemListContent);
		};

		function getItemsAndRender() {
			getAllItems(function(items) {
				renderItems(items);
			});			
		};

		function selectItem(itemName) {
			$(".item[data-item='" + itemName + "']").addClass('selected');
		}

		function unselectAllItems() {
			$('.selected').removeClass('selected');
		}

		function getSelectedItem() {
			return $('.selected').attr('data-item');
		}

		// Get all items at startup and render them
		getItemsAndRender();

		$addItemBtn.click(function() {
			addItem();
			getItemsAndRender();
		});

		$('.item').click(function() {
			var $item = $(this);
			var itemName = $item.attr('data-item');
			unselectAllItems();
			selectItem(itemName);
			console.log(getSelectedItem());
		});


	});