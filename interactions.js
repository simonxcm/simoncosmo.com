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
        navbar.className = " header-container sticky";
        leftElements.className = " left-elements";
        rightElements.className = " right-elements";
        menuTitles.className = " menu-titles";
    }
    
} 

/// Play videos on hover

const videos = document.querySelectorAll('video');

videos.forEach(video => {
    video.addEventListener('mouseover', () => {
        video.play();
    });
    video.addEventListener('mouseout', () => {
        video.pause();
    });
    video.addEventListener('touchstart', () => {
        video.play();
    });
    video.addEventListener('touchend', () => {
        video.pause();
    });
});



// *-----------------------------------------------------* //
// *----------  CHANGE VIDEO SOURCE ON MOBILE  ----------* //
// *-----------------------------------------------------* //


let mediaQuery = window.matchMedia("(max-width: 500px)")

let videoInvestimmo = document.getElementById("video-investimmo");
let videoLaeti = document.getElementById("video-laeti");
let videoSanta = document.getElementById("video-santa");
let videoButtercup = document.getElementById("video-buttercup"); 

function changeVideoSource(mediaQuery) {
    if (mediaQuery.matches) { 
        videoInvestimmo.setAttribute('src', '/medias/videos/investimmo-mobile.mp4');
        videoLaeti.setAttribute('src', '/medias/videos/laeti-mobile.mp4');
        videoSanta.setAttribute('src', '/medias/videos/santadeoliveira-mobile.mp4');
        videoButtercup.setAttribute('src', '/medias/videos/buttercupfarms-mobile.mp4');
    } else {
        videoInvestimmo.setAttribute('src', '/medias/videos/investimmo-tiny.mp4');
        videoLaeti.setAttribute('src', '/medias/videos/laeti-tiny.mp4');
        videoSanta.setAttribute('src', '/medias/videos/santadeoliveira-tiny.mp4');
        videoButtercup.setAttribute('src', '/medias/videos/buttercupfarms-tiny.mp4');
    }
}
   
changeVideoSource(mediaQuery) 
mediaQuery.addListener(myFunction)