console.log("ready to go!");

var urlas = chrome.extension.getURL("replacer.jpg");

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
    console.log(message.txt);
    if (message.txt == "hi") {
        
        let suggestedVideos = document.getElementsByTagName('ytd-compact-video-renderer');
        for (video of suggestedVideos) {

            //Relevant elements
            thumbnailSrc = video.childNodes[1].childNodes[1].childNodes[1].childNodes[1].childNodes[0].src;
            title = video.childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[3].childNodes[0];
            uploader = video.childNodes[1].childNodes[3].childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[1].childNodes[1].title;

            // Hiding/replacing

            if (uploader == "FORMULA 1") {
                console.log("!!!!!!!!VIDEO FROM F1!!!!!!!!!!!!!!!!")
                video.childNodes[1].childNodes[1].childNodes[1].childNodes[1].childNodes[0].src = urlas; //replacing img src
                video.childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[3].style.visibility = "hidden"; //hiding title
                console.log(video.childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[3].childNodes[0]);

            }
        }

    }
}

var target = document;
config = {attributes: true, subtree: true}

var makeObserver = new MutationObserver(function(mutations){
    for (mutation of mutations) {
        if (mutation.target.tagName === 'IMG' && mutation.target.src !== urlas) {
            uploader = mutation.target.parentNode.parentNode.parentNode.parentNode.childNodes[3].childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[1].childNodes[1].title;
            if (uploader == "FORMULA 1") {
                mutation.target.src = urlas;
            }
        }
    }
});

(function(){
    makeObserver.observe(target, config);
})();