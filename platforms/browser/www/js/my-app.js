// Initialize app
var myApp = new Framework7({
    material: true,
    modalTitle: 'Plus Sounds:',
    // ... other parameters
});


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main');

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
    mainView.router.loadPage('content.html');
});


// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('content', function (page) {
    
    console.log("content is ready!");
    getFiles(); //dropbox.js
    
})

