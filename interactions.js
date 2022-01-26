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

    console.log(topValue);

    if (window.pageYOffset > topValue) {
        header.classList.add("sticky");
        contentBelow.classList.add("sticky-padding");

    }
    else {
        header.classList.remove("sticky");
        contentBelow.classList.remove("sticky-padding");
    }
}