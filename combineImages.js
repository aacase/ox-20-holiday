var init = function(){
var background = new Image(); //we need to create two images within the canvas
var photo = new Image(); // here is the second image created
var ctx = document.getElementById("globeCanvas").getContext("2d"); //this grabs the element line sets it as a two dimentional plane
// we need it to be two dimentional because we're going to layer images

/*once the first element is created, we wait til it's loaded and then we run this code.
We do that to ensure that the background image is loaded first, and the second image gets loaded on top*/
background.onload = function () {

    ctx.drawImage(background, 280, 140, 200, 150);
    /* It's counterintuitive, but the webcam photo needs to be the bottom layer. 
     This is because it's easier to smooth the texture of the globe so it looks right. The globe just needs a transparent center
     
     The drawImage method takes 5 arguments.
     background, which we defined above, is the image source
     50 is 50 pixels to the right of the left border of the canvas
     50 is how many pixels from the top border of the canvas
     163 is the width of the image being drawn
     140 is the height of the image being drawn.


     You'll need to adjust the positioning, width, and height based on the final dimentions of the snowglobe and webcam capture
      */


    photo.src = "images/heroForMerge.png" // after background is loaded, load foreground
}
photo.onload = function () {
    ctx.drawImage(photo, 0, 0, 768, 432);
    /*once it's done loading, position, like it is explained above. Since this is the foreground
    you don't need to worry about where it is relative to the canvas edges since it's going to take up
    the whole thing. Adjust the width and height to the desired width and height of the downloaded image*/
}
background.src = document.getElementById('savedImage').src; //this is down here so we don't have to do a messy callback.

// Now we need a way to download it
function downloadCanvas() {
    var globeCanvas = document.getElementById('globeCanvas'); //grab our combined pictures
    var dataURL = globeCanvas.toDataURL("image/png"); //make them a data object, in this case a PNG
    var link = document.getElementById('downloadLink'); // make a pseudo link
    link.download = "snowGlobe.png"; // make a target for the pesudo link and title it what you want
    link.href = globeCanvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    link.click(); //click and download it virtually. and you're done!'
}

setTimeout(function(){ downloadCanvas(); }, 500);
}


