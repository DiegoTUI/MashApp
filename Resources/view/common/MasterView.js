//Master View Component Constructor
function MasterView() {
    // requires
    var network = require('util/network');
    var FSVenueSearchParser = require('model/FSVenueSearchParser');
	//create object instance, parasitic subclass of Observable
	var self = Ti.UI.createView({
		backgroundColor:'white'
	});
	// search bar
	var SearchView = require('view/common/SearchView');
	var searchView = new SearchView();
    
    self.add(searchView);
    
	// table
	var table = Ti.UI.createTableView({
	    top: searchView.height
	});
	
	self.add(table);
	
	
	//add behavior
	searchView.searchButton.addEventListener ('click', function (e){
	    Ti.API.debug('text field: ' + searchView.searchTextField.value);
	    // call geocoding service geocoding service
	    network.getCoordinates(searchView.searchTextField.value, function(position) {
	        Ti.API.debug("location for " + searchView.searchTextField.value +": " + position.latitude + ", "+ position.longitude);
	        // call mashoop for foursquare data
	        network.getVenues(position.latitude, position.longitude, function(response) {
                Ti.API.debug("venues received: " + response.venues.length);
                var fsVenueSearchParser = new FSVenueSearchParser (response);
                table.data = fsVenueSearchParser.tableVenues;
            });
	    });
	});
	
	table.addEventListener('click', function(e) {
		self.fireEvent('itemSelected', e.rowData);
	});
	
	return self;
};

module.exports = MasterView;