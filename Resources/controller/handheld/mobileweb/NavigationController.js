// Navigation Controller
function NavigationController (viewControllers){
    // self reference
    var self = Ti.UI.createWindow({
        backgroundColor:'#ffffff'
    });;
    // container windows
    var containerWindows = [];
    // create master windows with title
    viewControllers.forEach(function(viewController) {
        var containerWindow = Ti.UI.createWindow({
            title:viewController.title
        });
        containerWindows.push (containerWindow);
    });
    //create Mobile Web specific NavGroup UI
    var navGroup = Ti.UI.MobileWeb.createNavigationGroup({
        window:containerWindows[0]
    });
    // add it
    self.add (navGroup);
    
    containerWindows[0].addEventListener('itemSelected', function(e) {
        containerWindows[1].fireEvent('itemSelected',e);
        navGroup.open(containerWindows[1]);
    });
    
    return self;
}

module.exports = NavigationController;