// call back function

//
let browser='Chrome';

function checkBrowserVersion(callback) {
    // Simulate an asynchronous operation
    setTimeout(function() {
      callback(browser);
    }, 2000);
  }
  
  function printVersion(browser) {
    console.log('Browser version: ' + browser);
  }
  
  checkBrowserVersion(printVersion);

  