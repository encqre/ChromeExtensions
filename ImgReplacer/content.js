console.log("ready to go!");

var imgCount = 5;

function replaceAction(evt) {
    let imgs = document.getElementsByTagName('img');
    for (image of imgs) {
        if(!image.src.startsWith(chrome.extension.getURL("imgs/"))){
            url = chrome.extension.getURL("imgs/" + (Math.floor(Math.random() * imgCount)+1) +".jpg");
            image.src = url; 
        }
    }
}

// replaceAction();


chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
    console.log(message.txt);
    if (message.txt == "hi") {
        replaceAction();
    }
}

var target = document;
config = {attributes: true, subtree: true}

var makeObserver = new MutationObserver(function(mutations){
    for (mutation of mutations) {
        if (mutation.target.tagName !== 'IMG'){
            // console.log(mutation);
        }
        if (mutation.target.tagName === 'IMG' && !mutation.target.src.startsWith(chrome.extension.getURL("imgs/")) ) {
            mutation.target.src = chrome.extension.getURL("imgs/" + (Math.floor(Math.random() * imgCount)+1) +".jpg");
            console.log(mutation);
        }
    }
});

(function(){
    makeObserver.observe(target, config);
})();