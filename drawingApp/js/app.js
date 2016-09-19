//Problem: no user interaction possible
//Solution: when user interacts, cause changes appropriately
var color = $('.selected').css('background-color');
var $canvas = $('canvas');
var context = $canvas[0].getContext("2d");
var lastEvent;
var mouseDown = false;

//When clicking on control list items
$(".controls").on("click", "li", function() {
    $(this).siblings().removeClass('selected'); //deselect sibling elements
    $(this).addClass('selected'); //select clicked elements
    color = $(this).css('background-color') //cache current color
});

//When new color is pressed
$('#revealColorSelect').click(function() {
    changeColor();
    $('#colorSelect').toggle(); //Show color select or hide the color select
});
//Update the new color span
function changeColor() {
    var r = $('#red').val();
    var g = $('#green').val();
    var b = $('#blue').val();

    $('#newColor').css('background-color', 'rgb(' + r + ',' + g + ',' + b + ')');
}
//When color sliders change
$('input[type=range]').change(changeColor);


//When add color is pressed
//Append the color to the controls ul
$('#addNewColor').click(function() {
    var $newColor = $("<li></li>");
    $newColor.css(('background-color'),
        $('#newColor').css('background-color'));
    $('.controls ul').append($newColor);
    $newColor.click(); //Select the new color
});

//On mouse events of the canvas
//Draw lines
$canvas.mousedown(function(e) {
    lastEvent = e;
    mouseDown = true;
}).mousemove(function(e) {
    if (mouseDown) {
        context.beginPath();
        context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
        context.lineTo(e.offsetX, e.offsetY);;
        context.strokeStyle = color;
        context.stroke();
        lastEvent = e;
    }
}).mouseup(function() {
    mouseDown = false;
}).mouseleave(function() {
    $canvas.mouseup();
});
