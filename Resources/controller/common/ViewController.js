// View Controller
function ViewController(title) {
    // self reference
    var self = this;
    //title
    self.title = title;
    // the view
    self.view = null;
};

module.exports = MasterViewController;