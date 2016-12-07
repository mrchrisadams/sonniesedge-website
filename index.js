var FontFaceObserver = require('fontfaceobserver');

var fontOpenSans = new FontFaceObserver('Open Sans');
var fontRobotoSlab = new FontFaceObserver('Roboto Slab');
var html = document.documentElement;

fontOpenSans.load().then(function () {
  html.classList.add('fonts-loaded');
}).catch(function () {
  console.log('Open Sans failed to load.');
});

fontRobotoSlab.load().then(function () {
  html.classList.add('fonts-loaded');
}).catch(function () {
  console.log('Roboto Slab failed to load.');
});

var rss = require('./rss.js');
