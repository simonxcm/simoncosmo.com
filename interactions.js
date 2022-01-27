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



