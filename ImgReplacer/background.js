console.log("running in the background");

chrome.browserAction.onClicked.addListener(buttonClicked);

chrome.webNavigation.onDOMContentLoaded.addListener(function(details) {
    let msg = {
        txt:"hi"
    }
    console.log("Content loaded");
    chrome.tabs.sendMessage(details.tabId, msg);
 });
 

function buttonClicked(tab) {
    let msg = {
        txt:"hi"
    }
    chrome.tabs.sendMessage(tab.id, msg);
}

