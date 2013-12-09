function DetailView() {
	var self = Ti.UI.createView();
	
	var lbl = Ti.UI.createLabel({
		text:'Please select an item',
		height:'auto',
		width:'auto',
		color:'#000'
	});
	self.add(lbl);
	
	self.addEventListener('itemSelected', function(e) {
		lbl.text = e.name+': ' + e.hereNow.count + ' people checked-in in FourSquare';
	});
	
	return self;
};

module.exports = DetailView;
