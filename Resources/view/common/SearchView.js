// search view a text field and a search button
function SearchView () {
    //self reference
    var self = Ti.UI.createView({
        backgroundColor: 'white',
        top: 0,
        height: 43
    });
    
    // add text field
    self.searchTextField = Ti.UI.createTextField({
        top: 5,
        height: 28,
        left: 10,
        width: 0.75 * Ti.Platform.displayCaps.platformWidth,
        hintText: 'city (BCN, PMI)'
    });
    
    self.add (self.searchTextField);
    
    // add search Button
    self.searchButton = Ti.UI.createButton({
        title: 'Search',
        right: 5
    });
    
    self.add (self.searchButton);
    
    return self;
}

module.exports = SearchView;
