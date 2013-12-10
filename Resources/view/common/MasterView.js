//Master View Component Constructor
function MasterView() {
    // requires
    var network = require('util/network');
    var ATHotelListParser = require('model/ATHotelListParser');
	//create object instance, parasitic subclass of Observable
	var self = Ti.UI.createView({
		backgroundColor:'white'
	});
	// table
	var table = Ti.UI.createTableView();
	self.add(table);
	// load table contents
	network.getHotels('BCN', function(response) {
	    Ti.API.debug('response received. Parsing...');
	    var atHotelListParser = new ATHotelListParser(response);
	    Ti.API.debug('parsing complete. Painting...');
	    table.data = atHotelListParser.tableItems.slice(0,49);
	    Ti.API.debug('results painted');
	});
	
	//add behavior
	table.addEventListener('click', function(e) {
		self.fireEvent('itemSelected', e.rowData);
	});
	
	return self;
};

module.exports = MasterView;