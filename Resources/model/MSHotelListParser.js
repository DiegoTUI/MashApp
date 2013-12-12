// Mashoop hotel list parser
var MSHotelListParser = function (response) {
    // self reference
    var self = this;
    // the venues parsed
    self.tableItems = parseItems();
    // the venue parser
    function parseItems() {
        var parsedItems = [];
        
        if (isResponseValid()) {
            response.forEach (function (hotel) {
                parsedItems.push ({title: hotel.name,
                                   latitude: hotel.latitude,
                                   longitude: hotel.longitude,
                                   hasChild: true,
                                   color: '#000'});
            });
        }
        
        return parsedItems;
    }
    // checks if the response is valid
    function isResponseValid() {
        var isValid = true;
        if (typeof response !== 'object' ||
            response.length == 0) {
            isValid = false;
        }
        else {
            response.forEach (function (hotel) {
                if (hotel['name'] == undefined ||
                    hotel['latitude'] == undefined ||
                    hotel['longitude'] == undefined) {
                        isValid = false;
                        return;
                }
            });
        }
        return isValid;
    }
    
    return self;
};

module.exports = MSHotelListParser;