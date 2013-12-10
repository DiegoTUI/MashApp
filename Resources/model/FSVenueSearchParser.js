// FourSquare venue search parser
var FSVenueSearchParser = function (response) {
	// self reference
	var self = this;
	// the venues parsed
	self.tableItems = parseItems();
	// the venue parser
	function parseItems() {
		var parsedItems = [];
		
		if (isResponseValid()) {
			response.venues.forEach (function (venue) {
				parsedItems.push ({title: venue.name,
										hereNow: venue.hereNow,
										contact: venue.contact,
										location: venue.location,
										categories: venue.categories,
										stats: venue.stats,
										hasChild: true,
										color: '#000'});
			});
		}
		
		return parsedItems;
	}
	// checks if the response is valid
	function isResponseValid() {
		var isValid = true;
		if (typeof response['venues'] !== 'object' ||
			response.venues.length == 0) {
			isValid = false;
		}
		else {
			response.venues.forEach (function (venue) {
				if (venue['name'] == undefined ||
					venue['hereNow'] == undefined ||
					venue.hereNow['count'] == undefined) {
						isValid = false;
						return;
				}
			});
		}
		return isValid;
	}
	
	return self;
};

module.exports = FSVenueSearchParser;
