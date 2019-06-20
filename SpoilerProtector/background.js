console.log("running in the background");

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
    let msg = {
        txt:"hi"
    }
    chrome.tabs.sendMessage(tab.id, msg);
}