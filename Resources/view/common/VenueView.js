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
            lbl.text = "name: " + e.title + "\n" +
             "contact: " + JSON.stringify(e.contact, null, "\t") + "\n" +
             "location: " + JSON.stringify(e.location, null, "\t") + "\n" +
             "categories: " + JSON.stringify(e.categories, null, "\t") + "\n" +
             "stats: " + JSON.stringify(e.stats, null, "\t");
    });
    
    return self;
};

module.exports = VenueView;