var image = document.getElementById('image');
var slides = ['slideimages/artdesk.jpeg', 'slideimages/artstore.jpeg', 'slideimages/beads.jpeg', 'slideimages/markercups.jpeg', 'slideimages/markers.jpeg', 'slideimages/anotherdesk.jpeg', 'slideimages/brushes.jpeg', 'slideimages/paints.jpeg'];
var start = 0;

// function to go through each image
function slider(){
    if(start<slides.length){
        start = (start + 1) % slides.length;
    }
    else{
        start = 0;
    }
    console.log(image);
    image.innerHTML = "<img src=" + slides[start] + ">";
   
}
// switches to next one every 2 seconds
setInterval(slider, 2000);
