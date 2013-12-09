// FourSquare venue search parser
var FSVenueSearchParser = function (response) {
	// self reference
	var self = this;
	// the venues parsed
	self.tableVenues = parseVenues();
	// the venue parser
	function parseVenues() {
		var parsedVenues = [];
		
		if (isResponseValid()) {
			response.venues.forEach (function (venue) {
				parsedVenues.push ({title: "  " + venue.name,
										hereNow: venue.hereNow,
										hasChild: true,
										color: '#000'});
			});
		}
		
		return parsedVenues;
	}
	// checks if the response is valid
	function isResponseValid() {
		var isValid = true;
		if (typeof response['venues'] != 'object' ||
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
