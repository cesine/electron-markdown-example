# Desktop Apps with Javascript

---

Why to do it  
What it is  
Follow up with an example   

---

    > Any application that can be written in JavaScript, will eventually be written in JavaScript. - Jeff Atwood (2007)

* https://github.com/os-js/OS.js
* https://github.com/1j01/jspaint
* https://github.com/pypyjs/pypyjs
* https://github.com/kripken/emscripten
* https://github.com/atom/electron
* https://github.com/fglock/Perlito

---

## Why do it?
* cross platform
* ease of use / common use cases

---

## Why desktop apps?
* can access the file system
* can access the clipboard
* can adjust menus
* can integrate with the os  (open in finder, widgets, notification)

---

## Examples of existing apps

----

## atom
* the original (atom shell)

----

## vs code
* microsoft, open source
* chose it over their existing well known / popular ide

----

## slack
* started as a native mac app
* electron on windows and then back ported
* side by side comparison with web

----

## Postman
* started as a chrome app

----

## mojibar
* Native system tray app to find the :cat:fect emoji

---

## What is Electron?
* tool for building cross platform native apps with native technology
    * javascript/ html, css
    * electron
    * OS

----

Electron is a specific version of node with a specific version of chromium. 
* designing only for one browser  
* access to the dom / chrome dev tools
access to node libraries  
* any javascript framework.  (angular react ember)
* any javascript library.  (hello npm).

Note: combines chromium and node into a single runtime.  
Note: mac app store  
Note: native dialogs

----

*Explanation of electron main and renderer*  

__diagram__

Electron has at least two processes.

The main that handles app lifecycle and then the renderer process.  
They talk to each other with ipc.  
There can be multiple renderers (each with its own v8).


---

# DEMO

---

## Resources:

Homepage : http://electron.atom.io  
Source:  


curve:  
electron resources: https://github.com/sindresorhus/awesome-electron  
sample api usage: https://github.com/hokein/electron-sample-apps

----

misc unorganized notes:

* In javascript (don’t need to learn native frameworks)
* but not mobile (yet)



node on the frontend
fs injection into dom

Useful for backend engineers to make meaningful frontends
