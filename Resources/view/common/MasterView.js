//Master View Component Constructor
function MasterView() {
    // requires
    var network = require('util/network');
    var MSHotelListParser = require('model/MSHotelListParser');
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
        // load table contents
        network.getHotelsMS(searchView.searchTextField.value, function(response) {
            Ti.API.debug('response received. Parsing...');
            var msHotelListParser = new MSHotelListParser(response);
            Ti.API.debug('parsing complete. Painting...');
            table.data = msHotelListParser.tableItems;
            Ti.API.debug('results painted');
        });
    });
	table.addEventListener('click', function(e) {
		self.fireEvent('itemSelected', e.rowData);
	});
	
	return self;
};

module.exports = MasterView;