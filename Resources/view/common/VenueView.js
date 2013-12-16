// venue view
function VenueView() {
    var self = Ti.UI.createView();
    
    var lbl = Ti.UI.createLabel({
            text:'Please select an item',
            height:'auto',
            width:'auto',
            color:'#000'
    });
    self.add(lbl);
    
    self.addEventListener('itemSelectedInDetails', function(e) {
            var keys = ['distance', 'contact', 'rating', 'location', 'categories', 'hereNow', 'stats'];
            lbl.text = "name: " + e.title + "\n";
            lbl.text = lbl.text + "source: " + e.source + "\n";
            keys.forEach(function(key) {
                lbl.text = e[key] == undefined ? lbl.text : lbl.text + key + ": " + JSON.stringify(e[key], null, 4) + "\n";
            });
    });
    
    return self;
};

module.exports = VenueView;