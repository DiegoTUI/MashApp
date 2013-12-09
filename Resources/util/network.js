// singleton to manage network calls
var network = new function(){
    //self reference
    var self = this;
    // config
    var config = require('config.js');
    //get venues
    self.getVenues = function(latitude, longitude, callback){
    	if (config.useLocalResponse) {
    		var response = require('server/response.js').fsVenueSearchResponse;
    		callback (response);
    		return;
    	}
        var xhr = Titanium.Network.createHTTPClient();
        xhr.onload = function() {
            Ti.API.info("Connection loaded. Callback: " + xhr.responseText);
            callback(JSON.parse(xhr.responseText));
        };
        xhr.onerror = function() {
            Ti.API.info("Error occurred");
        };
        var completeUrl = config.mashoopUrl + config.apiKey + '/fs-venue-search?ll=' + latitude + ',' + longitude;
        Ti.API.info("Opening connection: " + completeUrl);
        xhr.open("GET", completeUrl);
        xhr.send();
    };
    
    return self;
};

module.exports = network;