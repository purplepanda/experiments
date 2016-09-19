//Problem: user, when clicking on image, goes to a dead end
//Solution: create an overlay with the large image - Lightbox

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>"); //An image
var $caption = $("<p></p>"); // A caption

//Add image to overlay
$overlay.append($image);
//Add caption to overlay
$overlay.append($caption);

//Add overlay to body
$("body").append($overlay);


//Capture the click event on a link to an image
$("#imageGallery a").click(function(event) {
    event.preventDefault();
    var imageLocation = $(this).attr("href");
    $image.attr("src", imageLocation); //update overlay with the image linked in the linked

    $overlay.show(); //Show the overlay

    var captionText = $(this).children("img").attr("alt"); //Get child's alt attribute and set caption
    $caption.text(captionText);

});


//3. When overlay is clicked
//3.1. Hide the overlay
$overlay.click(function() {
    $overlay.hide();
});
