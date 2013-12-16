// detail view
function DetailView() {
	// requires
    var network = require('util/network');
    var MSVenuesParser = require('model/MSVenuesParser');
    //create object instance, parasitic subclass of Observable
    var self = Ti.UI.createView({
        backgroundColor:'white'
    });
    // table
    var table = Ti.UI.createTableView();
    self.add(table);
    // load table contents when a row has been clicked
    self.addEventListener('itemSelectedInMaster', function (e) {
        network.getMashoopVenues(e.latitude, e.longitude, function(response) {
            var msVenuesParser = new MSVenuesParser (response);
            table.data = msVenuesParser.tableItems;
        });
    });
    
    //add behavior
    table.addEventListener('click', function(e) {
        self.fireEvent('itemSelectedInDetails', e.rowData);
    });
    
    return self;
};

module.exports = DetailView;
