'use strict';


// *----------------------------------------------* //
// *---------------  STICKY NAVBAR  --------------* //
// *----------------------------------------------* //


window.onscroll = function() {
    myFunction()
};
  
let header = document.getElementById("header");
let contentBelow = document.getElementById("profile-container");
let topValue = header.offsetTop;

function myFunction() {

    if (window.pageYOffset > topValue) {
        header.classList.add("sticky");
        contentBelow.classList.add("sticky-padding");

    }
    else {
        header.classList.remove("sticky");
        contentBelow.classList.remove("sticky-padding");
    }
}


// *----------------------------------------------------* //
// *---------------  PLAY VIDEO ON HOVER  --------------* //
// *----------------------------------------------------* //


let videoOne = document.getElementById("video-one");
let videoTwo = document.getElementById("video-two");
let videoThree = document.getElementById("video-three");
let videoFour = document.getElementById("video-four");
let videoFive = document.getElementById("video-five"); 
let videoSix = document.getElementById("video-six"); 

function playVid1()
{ 
    videoOne.play();  
} 

function pauseVid1()
{ 
    videoOne.pause();
}

function playVid2()
{ 
    videoTwo.play();  
} 

function pauseVid2()
{ 
    videoTwo.pause();
}

function playVid3()
{ 
    videoThree.play();  
} 

function pauseVid3()
{ 
    videoThree.pause();
}

function playVid4()
{ 
    videoFour.play();  
} 

function pauseVid4()
{ 
    videoFour.pause();
}

function playVid5()
{ 
    videoFive.play();  
} 

function pauseVid5()
{ 
    videoFive.pause();
}

function playVid6()
{ 
    videoSix.play();  
} 

function pauseVid6()
{ 
    videoSix.pause();
}



if("ontouchstart" in document.documentElement){
    let video = document.querySelectorAll("video")[0];
    var img = document.createElement("img");

    //set img attributes here

    video.parentNode.replaceChild(img, video);

}


function changeVideoSource() {
    if (mediaQuery.matches) { 
        videoOne.setAttribute('src', '/medias/liberte_sans_nom-tiny.mp4');
        videoTwo.setAttribute('src', '/medias/identite-tiny.mp4');
        videoThree.setAttribute('src', '/medias/leo_fifty_five-tiny.mp4');
        videoFour.setAttribute('src', '/medias/sombrero-tiny.mp4');
        videoFive.setAttribute('src', '/medias/jaia_rose-tiny.mp4');
    } else {
        videoOne.setAttribute('src', '/medias/liberte_sans_nom.mp4');
        videoTwo.setAttribute('src', '/medias/identite.mp4');
        videoThree.setAttribute('src', '/medias/leo_fifty_five.mp4');
        videoFour.setAttribute('src', '/medias/sombrero.mp4');
        videoFive.setAttribute('src', '/medias/jaia_rose.mp4');
    }
}

let body = document.getElementById('body')


