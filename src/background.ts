// This file is ran as a background script
console.log("Hello from background script!")
chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.create({'url':'chrome://rememberme'});
});