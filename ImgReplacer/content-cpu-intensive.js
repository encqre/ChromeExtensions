console.log("ready to go!");

var file = "imgs/1.jpg"
var url = chrome.extension.getURL(file);

function replaceAction() {
    let imgs = document.getElementsByTagName('img');
    for (image of imgs) {
        if (image.src != url) {
            image.src = url; 
            console.log("replaced image");
        }
    }
}

var target = document;
config = {attributes: true, subtree: true}

var makeObserver = new MutationObserver(function(mutations){
    for (mutation of mutations) {
        if (mutation.target.src !== chrome.extension.getURL("imgs/1.jpg") ) {
            console.log("triggered!!!!");
            replaceAction();
        }
    }
});

(function(){
    makeObserver.observe(target, config);
})();