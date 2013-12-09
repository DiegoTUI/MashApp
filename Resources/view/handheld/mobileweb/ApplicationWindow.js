function ApplicationWindow() {
	//declare module dependencies
	var MasterView = require('view/common/MasterView'),
		DetailView = require('view/common/DetailView'),
		config = require('config');
		
	//create object instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff'
	});
		
	//construct UI
	var masterView = new MasterView(),
		detailView = new DetailView();
		
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
	
	//create Mobile Web specific NavGroup UI
	var navGroup = Ti.UI.MobileWeb.createNavigationGroup({
		window:masterContainerWindow
	});
	self.add(navGroup);
	
	//add behavior for master view
	masterView.addEventListener('itemSelected', function(e) {
	    detailContainerWindow.title = e.title;
		detailView.fireEvent('itemSelected',e);
		navGroup.open(detailContainerWindow);
	});
	
	return self;
};

module.exports = ApplicationWindow;
