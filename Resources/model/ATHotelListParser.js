// Atlas hotel list parser
var ATHotelListParser = function (response) {
    // self reference
    var self = this;
    // the venues parsed
    self.tableItems = parseItems();
    // the venue parser
    function parseItems() {
        var parsedItems = [];
        
        if (isResponseValid()) {
            response.HotelList.forEach (function (hotel) {
                parsedItems.push ({title: hotel.Name,
                                   code: hotel.Code,
                                   hasChild: true,
                                   color: '#000'});
            });
        }
        
        return parsedItems;
    }
    // checks if the response is valid
    function isResponseValid() {
        var isValid = true;
        if (typeof response['HotelList'] !== 'object' ||
            response.HotelList.length == 0) {
            isValid = false;
        }
        else {
            response.HotelList.forEach (function (hotel) {
                if (hotel['Name'] == undefined ||
                    hotel['Code'] == undefined) {
                        isValid = false;
                        return;
                }
            });
        }
        return isValid;
    }
    
    return self;
};

module.exports = ATHotelListParser;