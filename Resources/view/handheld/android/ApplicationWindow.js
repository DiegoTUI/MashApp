function ApplicationWindow() {
	//declare module dependencies
	var MasterView = require('view/common/MasterView'),
		DetailView = require('view/common/DetailView'),
		config = require('config');
		
	//create object instance
	var self = Ti.UI.createWindow({
		title: config.masterTitle,
		exitOnClose:true,
		navBarHidden:false,
		backgroundColor:'#ffffff'
	});
		
	//construct UI
	var masterView = new MasterView();
	self.add(masterView);

	//add behavior for master view
	masterView.addEventListener('itemSelected', function(e) {
		//create detail view container
		var detailView = new DetailView();
		var detailContainerWindow = Ti.UI.createWindow({
			title: config.detailsTitle,
			navBarHidden:false,
			backgroundColor:'#ffffff'
		});
		detailContainerWindow.add(detailView);
		detailView.fireEvent('itemSelected',e);
		detailContainerWindow.open();
	});
	
	return self;
};

module.exports = ApplicationWindow;
