// object to hold the device's data
var device = new function() {
    //self reference
    var self = this;
    // screen width
    self.screenWidth = Ti.Platform.displayCaps.platformWidth;
    
    return self;
};

module.exports = device;