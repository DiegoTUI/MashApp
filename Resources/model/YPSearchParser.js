// Yelp search parser
var YPSearchParser = function (response) {
	// self reference
	var self = this;
	// the venues parsed
	self.tableItems = parseItems();
	// the venue parser
	function parseItems() {
		var parsedItems = [];
		
		if (isResponseValid()) {
			response.businesses.forEach (function (venue) {
				parsedItems.push ({title: venue.name,
										source: 'yelp',
										distance: venue.distance,
										contact: venue.contact,
										rating: venue.rating,
										location: venue.location,
										categories: venue.categories,
										hasChild: true,
										color: 'red'});
			});
		}
		
		return parsedItems;
	}
	// checks if the response is valid
	function isResponseValid() {
		var isValid = true;
		if (typeof response['businesses'] !== 'object' ||
			response.businesses.length == 0) {
			isValid = false;
		}
		else {
			response.businesses.forEach (function (venue) {
				if (venue['id'] == undefined ||
					venue['name'] == undefined) {
						isValid = false;
						return;
				}
			});
		}
		return isValid;
	}
	
	return self;
};

module.exports = YPSearchParser;