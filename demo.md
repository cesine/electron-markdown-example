# Electron Markdown Editor Tutorial

---

## Initialize the Project

```js
npm install electron-prebuilt
npm init
```


----

## Create `main.js`

```js
'use strict';

var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;

var mainWindow = null;

app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 800, height: 600});

});
```

----

## Create `index.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Electron Markdown!</title>
  </head>
  <body>
  	Hello Electron!
  </body>
</html>
```

----

## add the following lines to the on ready callback in `main.js`

```js
mainWindow.loadURL('file://' + __dirname + '/index.html');
mainWindow.webContents.openDevTools();

mainWindow.on('closed', function() {
	mainWindow = null;
});
```

Note:
*mention dev tools
hello world!

```
<script>
	var fs = require('fs');
	document.write('<pre>' + fs.readFileSync('main.js') + '</pre>');
</script>
```

---

## some bare bones

#### Add this to the body of `index.html`
```html
<textarea id="leftSide"></textarea>
<div id="rightSide"></div>
```

----

#### Add some style to the head of `index.html`
```css
    <style>
      #leftSide {
        position: fixed;
        padding: 10px;
        top: 0px;
        left: 0px;
        width: 50%;
        height: 100%;
        font-size: medium;
        background-color: whitesmoke;
      }
      #rightSide {
        position: fixed;
        padding: 10px;
        top: 0px;
        right: 0px;
        width: 50%;
        height: 100%;
        overflow: auto;
        background-color: white;
      }
      html, body {
        height: 100%;
      }
    </style>
```

---

##  #InlineJavascript #YOLO

```js
var input = document.getElementById('leftSide');
input.addEventListener('keyup', function(e) {
	var renderedData = input.value
	var output = document.getElementById('rightSide');
	output.innerHTML = renderedData;
});
```

---

## Add markdown support
```bash
npm install marked --save
```

#### In `index.html`
```js
var marked = require('marked')

output.innerHTML = marked(renderedData);
```


---
Fin

----



menu bar stuff:

Add this to main.js:

var remote = require('remote'
var Menu = require(‘menu’);

var menu = Menu.buildFromTemplate([
	{ label: 'Electron Markdown'},
		submenu: [
			{
				labels: 'Preferencess',
				click: function() {

				}
			}
	}])
	
localStorage.setItem(title, JSON.stringify(object));


getall: function(){
    
    Object.keys(localStorage)
    }

# ipc

var ipc = require('ipc'




#### Used in demo:
* https://github.com/chjj/marked
* http://hassankhan.me/emojify.js/
* https://highlightjs.org/




