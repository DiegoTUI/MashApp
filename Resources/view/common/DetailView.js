// detail view
function DetailView() {
	// requires
    var network = require('util/network');
    var FSVenueSearchParser = require('model/FSVenueSearchParser');
    //create object instance, parasitic subclass of Observable
    var self = Ti.UI.createView({
        backgroundColor:'white'
    });
    // table
    var table = Ti.UI.createTableView();
    self.add(table);
    // load table contents when a row has been clicked
    self.addEventListener('itemSelectedInMaster', function (e) {
        network.getVenues(e.latitude, e.longitude, function(response) {
            fsVenueSearchParser = new FSVenueSearchParser (response);
            table.data = fsVenueSearchParser.tableItems;
        });
    });
    
    //add behavior
    table.addEventListener('click', function(e) {
        self.fireEvent('itemSelectedInDetails', e.rowData);
    });
    
    return self;
};

module.exports = DetailView;
