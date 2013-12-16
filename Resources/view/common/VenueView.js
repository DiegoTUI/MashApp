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
            lbl.text = "name: " + e.title + "\n";
            for (var key in e) {
            	lbl.text = lbl.text + key + ": " + JSON.stringify(e[key], null, "\t") + "\n";
            }
    });
    
    return self;
};

module.exports = VenueView;