// Mashoop venues list parser
var MSVenuesParser = function (response) {
    // self reference
    var self = this;
    // other parsers
    var FSVenueSearchParser = require('model/FSVenueSearchParser');
    var YPSearchParser = require('model/YPSearchParser');
    // the venues parsed
    self.tableItems = parseItems();
    // the venue parser
    function parseItems() {
        var parsedItems = [];
        
        if (isResponseValid()) {
        	// parsers
        	var fsVenueSearchParser = new FSVenueSearchParser(response.foursquare);
        	var ypSearchParser = new YPSearchParser(response.yelp);
            // shuffle both responses and consolidate
            var minimum = fsVenueSearchParser.tableItems.length <= ypSearchParser.tableItems.length ? fsVenueSearchParser.tableItems.length : ypSearchParser.tableItems.length;
            for (var i=0; i<minimum; i++) {
            	parsedItems.push(fsVenueSearchParser.tableItems[i]);
            	parsedItems.push(ypSearchParser.tableItems[i]);
            }
        }
        
        return parsedItems;
    }
    // checks if the response is valid
    function isResponseValid() {
        var isValid = true;
        if (typeof response !== 'object' ||
            response.yelp == undefined ||
            response.foursquare == undefined) {
            isValid = false;
        }
        
        return isValid;
    }
    
    return self;
};

module.exports = MSVenuesParser;