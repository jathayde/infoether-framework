// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

// Calls a Safari specific stylesheet
function isSafari(){
  var app = navigator.userAgent;
  if (app.indexOf('Safari') != -1) {
    document.write(" <link href=\"/stylesheets/safari.css\" media=\"screen\" rel=\"stylesheet\" type=\"text/css\" /> ");
  }
}
isSafari();

// Force Opera to reload when using the back button
// http://dev.opera.com/forums/topic/224464
function OperaReload() {
  try {
  var headElement = document.getElementsByTagName("head")[0];
  if (headElement && headElement.innerHTML)
    headElement.innerHTML += "<meta http-equiv=\"refresh\" content=\"1\">";
  }
  catch (e) {}
}

// Load Event - What is this for???

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}
addLoadEvent(function() {
  img.Sizer.collate();
});

