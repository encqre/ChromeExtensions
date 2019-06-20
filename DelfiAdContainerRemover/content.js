console.log("ready to go!");

elementAboveContainer = document.getElementById('header-top-banner'); // finding the element above the ad container
elementAboveContainer.parentNode.removeChild(elementAboveContainer); //removing this container seems to stop the ad from ever loading