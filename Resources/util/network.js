// singleton to manage network calls
var network = new function(){
    //self reference
    var self = this;
    
    //get venues
    self.getVenues = function(latitude, longitude, callback){
        var xhr = Titanium.Network.createHTTPClient();
        xhr.onload = function() {
            Ti.API.info("Connection loaded. Callback: " + xhr.responseText);
            callback(JSON.parse(xhr.responseText));
        };
        xhr.onerror = function() {
            Ti.API.info("Error occurred");
        };
        Ti.API.info("Opening connection: http://54.246.80.107/api/testapikey/fs-venue-search?ll=" + + latitude + ',' + longitude);
        xhr.open("GET", 'http://54.246.80.107/api/testapikey/fs-venue-search?ll=' + latitude + ',' + longitude);
        //xhr.open("GET", 'http://localhost:8080/api/testapikey/fs-venue-search?ll=' + latitude + ',' + longitude);
        xhr.send();
    };
    
    return self;
};

module.exports = network;