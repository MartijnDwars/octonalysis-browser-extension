// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function (tab) {
  // Execute analyse.js
  chrome.tabs.executeScript(null, {file: "analyse.js"});
});

