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


// *----------------------------------------------* //
// *----------------  BURGER MENU  ---------------* //
// *----------------------------------------------* //


function displayBurger() {

    let middleElements = document.getElementById("middle-elements");
    let navbar = document.getElementById("header");
    let leftElements = document.getElementById("left-elements");
    let rightElements = document.getElementById("right-elements");
    let menuTitles = document.getElementById("menu-titles");

    if (middleElements.className === "middle-elements") {
        middleElements.className += " responsive";
        navbar.className += " burger-menu";
        leftElements.className += " display-none";
        rightElements.className += " display-none";
        menuTitles.className += " display-burger";

    } else if (middleElements.className === "middle-elements responsive") {
        middleElements.className = "middle-elements";
        navbar.className = " header-container";
        leftElements.className = " left-elements";
        rightElements.className = " right-elements";
        menuTitles.className = " menu-titles";
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

videoOne.load();  
videoTwo.load();  
videoThree.load();  
videoFour.load();  
videoFive.load();  
videoSix.load();  

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


// *-----------------------------------------------------* //
// *----------  CHANGE VIDEO SOURCE ON MOBILE  ----------* //
// *-----------------------------------------------------* //


let mediaQuery = window.matchMedia("(max-width: 500px)")

function changeVideoSource(mediaQuery) {
    if (mediaQuery.matches) { 
        videoOne.setAttribute('src', '/medias/videos/investimmo-mobile.mp4');
        videoTwo.setAttribute('src', '/medias/videos/laeti-mobile.mp4');
        videoThree.setAttribute('src', '/medias/videos/christelo-mobile.mp4');
        videoFour.setAttribute('src', '/medias/videos/santadeoliveira-mobile.mp4');
        videoFive.setAttribute('src', '/medias/videos/cestlavie-mobile.mp4');
        videoSix.setAttribute('src', '/medias/videos/buttercupfarms-mobile.mp4');
    } else {
        videoOne.setAttribute('src', '/medias/videos/investimmo-tiny.mp4');
        videoTwo.setAttribute('src', '/medias/videos/laeti-tiny.mp4');
        videoThree.setAttribute('src', '/medias/videos/christelo-tiny.mp4');
        videoFour.setAttribute('src', '/medias/videos/santadeoliveira-tiny.mp4');
        videoFive.setAttribute('src', '/medias/videos/cestlavie-tiny.mp4');
        videoSix.setAttribute('src', '/medias/videos/buttercupfarms-tiny.mp4');
    }
}
   
changeVideoSource(mediaQuery) 
mediaQuery.addListener(myFunction)