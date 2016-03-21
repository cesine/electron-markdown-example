**demo steps:**

1.  ```npm install electron-prebuilt
	   npm init
1. ```

2. create a new file called main.js


create main.html

*mention dev tools

menu bar stuff:

Add this to main.js:

var remote = require('remote'
var Menu = require(‘menu’);

var menu = Menu.buildFromTemplate([
	{ label: 'Electron Marldown'},
		submenu: [
			{
				labels: 'Preferencess',
				click: function() {

				}
			}
	}])
	

# ipc

var ipc = require('ipc'




Used in demo:  https://github.com/chjj/marked
http://hassankhan.me/emojify.js/
https://highlightjs.org/








