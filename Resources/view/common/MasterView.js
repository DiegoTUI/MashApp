//Master View Component Constructor
function MasterView() {
    var network = require('util/network');
    var FSVenueSearchParser = require('model/FSVenueSearchParser');
	//create object instance, parasitic subclass of Observable
	var self = Ti.UI.createView({
		backgroundColor:'white'
	});
	
	var table = Ti.UI.createTableView();
	
	network.getVenues("44.3", "37.2", function(response) {
	    Ti.API.debug("venues received: " + response.venues.length);
	    var fsVenueSearchParser = new FSVenueSearchParser (response);
	    table.data = fsVenueSearchParser.tableVenues;
	});
	
	self.add(table);
	
	
	//add behavior
	table.addEventListener('click', function(e) {
		self.fireEvent('itemSelected', {
			name:e.rowData.title,
			hereNow:e.rowData.hereNow
		});
	});
	
	return self;
};

module.exports = MasterView;