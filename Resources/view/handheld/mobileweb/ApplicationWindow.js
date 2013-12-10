function ApplicationWindow() {
	//declare module dependencies
	var MasterView = require('view/common/MasterView'),
		DetailView = require('view/common/DetailView'),
		VenueView = require('view/common/VenueView'),
		config = require('config');
		
	//create object instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff'
	});
		
	//construct UI
	var masterView = new MasterView(),
		detailView = new DetailView(),
		venueView = new VenueView();
		
	//create master view container
	var masterContainerWindow = Ti.UI.createWindow({
		title: config.masterTitle
	});
	masterContainerWindow.add(masterView);
	
	//create detail view container
	var detailContainerWindow = Ti.UI.createWindow({
		title: config.detailsTitle
	});
	detailContainerWindow.add(detailView);
	
	//create detail view container
    var venueContainerWindow = Ti.UI.createWindow({
        title: config.venueTitle
    });
    venueContainerWindow.add(venueView);
	
	//create Mobile Web specific NavGroup UI
	var navGroup = Ti.UI.MobileWeb.createNavigationGroup({
		window:masterContainerWindow
	});
	self.add(navGroup);
	
	//add behavior for master view
	masterView.addEventListener('itemSelected', function(e) {
		detailView.fireEvent('itemSelectedInMaster',e);
		navGroup.open(detailContainerWindow);
	});
	//add behaviour for detail view
	detailView.addEventListener('itemSelectedInDetails', function(e) {
        venueView.fireEvent('itemSelectedInDetails',e);
        navGroup.open(venueContainerWindow);
    });
	
	return self;
};

module.exports = ApplicationWindow;
