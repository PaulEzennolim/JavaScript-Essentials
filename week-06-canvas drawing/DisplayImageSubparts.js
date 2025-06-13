"use strict";
// Author: Steve Maddock

// functions

function drawThreeParts(img, context) {
  context.drawImage(img,10,10);
  let x = 10;
  let y = 150;
  let ox = 0;
  let oy = 0;
  let w = img.width/3;
  let h = img.height;
  context.drawImage(img, ox,oy,w,h, x, y, w, h);
  x+=w+20;
  context.drawImage(img, ox+w,oy,w,h, x, y, w, h);
  x+=w+20;
  context.drawImage(img, ox+w*2,oy,w,h, x, y, w, h);
}

function draw(context, callback) {  
                                 // A 'callback' is a function that is invoked after some kind of event, 
                                 // In this example, it is called once the image has completed loading
  let img = new Image();
  img.onload = function() {      // Anonymous function, i.e. it has no name
    callback(this, context);     // Call the function stored in the variable 'callback'
                                 // 'this' refers to the containing object currently in focus, i.e. img
  }
  img.src = "Paul - Personal/Desktop/Web and internet/JavaScript/Canvas drawing/Tech image 1.jpg";
}

// main program body

let canvas = document.getElementById("example");
let context = canvas.getContext("2d");
const CANVAS_WIDTH = canvas.width;
const CANVAS_HEIGHT = canvas.height;
draw(context, drawThreeParts);  // pass the name of a function as the second parameter
                                // In JavaScript, functions can be stored in variables