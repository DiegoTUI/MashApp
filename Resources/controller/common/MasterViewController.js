// Master View Controller
function MasterViewController(title) {
    //declare module dependencies
    var MasterView = require('view/common/MasterView');
    var ViewController = require('controller/common/ViewController');
    // self reference
    var self = new ViewController (title);
    // the view
    self.view = new MasterView();
};

module.exports = MasterViewController;
