/** 	Global js file for myGroceryBank application
 ** 	@author touzbi
 **/

$(document).ready(function() {
		
		var
		
		// JQuery elements
		$addItemBtn = $('#addItemBtn'),
		$itemName = $('#itemName'),
		$messageLabel = $('#messageLabel'),
		$items = $('.items'),

		supportsLocalStorage = typeof(Storage) !== "undefined";

		// Add an item to the system
		var addItem = function(item) {

			if(supportsLocalStorage) {

				getAllItems(function(items) {
					
					// Add the item to the existing item list
					items.push(item);

					// Save the items to local storage
					localStorage.items = JSON.stringify(items);
				});
			} else {
				// TODO if no local storage support from browser
			}

		};

		// Get all registered items
		var getAllItems = function(callback){
			if(!localStorage.items)	localStorage.items = '[]';

			var items = JSON.parse(localStorage.items);
			callback(items);
		};

		var renderItems = function(items) {
			var itemName;

			$items.html('<ul></ul>');

			// Data row
			$.each(items, function(index, item) {

				itemName = item.name !== null ? item.name : '_';


				var $item = $('<li>', {
					"class": 'item',
					"data-item": itemName,
					"html": '<span class="fa fa-' + itemName + ' fa-5x item-icon"></span>', 
					"on": {
						click: function() {
							doSelection($item);
						}
					}
				}).appendTo($items.children('ul'));

			});

		};

		// Item selection functions

		var selectedClass = 'selected';

		function getItemsAndRender() {
			getAllItems(function(items) {
				renderItems(items);
			});			
		};

		function selectItem($item) {
			$item.addClass(selectedClass);
		}

		function unselectAllItems() {
			$('.' + selectedClass).removeClass(selectedClass);
		}

		function getSelectedItem() {
			return $('.' + selectedClass).attr('data-item');
		}

		function isSelected($item) {
			return $item.hasClass(selectedClass);
		}

		function doSelection($item) {
			if (isSelected($item)) {
				unselectAllItems();
			} else {
				unselectAllItems();
				selectItem($item);
			}

		}

		// Get all items at startup and render them

		getItemsAndRender();

		$addItemBtn.click(function() {

			var itemName = $itemName.val();
			var item = { name: itemName};

			addItem(item);
			getItemsAndRender();
		});

	});