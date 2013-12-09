// clss to store a geographical position
function Position (latitude, longitude) {
    // self reference
    var self = this;
    // latitude and longitude
    self.latitude = latitude;
    self.longitude = longitude;
    // construct the object
    if (typeof latitude == 'string' && longitude === undefined) {
        var position = latitude.split(',');
        self.latitude = parseFloat(position[0]);
        self.longitude = parseFloat(position[1]);
    }
    
    return self;
}

module.exports = Position;