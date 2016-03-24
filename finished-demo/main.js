'use strict';

var gui = require('nw.gui');

var mainWindow = gui.Window.get();
// Extend application menu for Mac OS
if (process.platform == "darwin") {
  var menu = new gui.Menu({
    type: "menubar"
  });
  menu.createMacBuiltin && menu.createMacBuiltin(window.document.title);
  mainWindow.menu = menu;
}

mainWindow.show();
mainWindow.showDevTools();
