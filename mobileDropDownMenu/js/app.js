//menu looks bad in smaller browser widths and smaller devices
//solution: hide texts links and swap out with more appropriate nav when smaller


//create a select and append to #menu

var $select = $('<select></select>');
$('#menu').append($select);

//Cycle over menu links
$('#menu a').each(function() {
    var $anchor = $(this);
    var $option = $('<option></option>');

    //create option in select box for all menu links
    if ($anchor.parent().hasClass("selected")) {
        $option.prop("selected", true);
    }
    //option's value is the href of the links
    $option.val($anchor.attr("href")); //SET not GET?
    //option's text is the text of the link
    $option.text($anchor.text());
    //append option to select
    $select.append($option);

});


//create a button
var $button = $('<button>Go</button)');
//$('#menu').append($button);
//bind click to button
//$button.click(function() {
//go to select's location - GET not SET?
//window.location = $select.val();
//});

//Bind an event listener to the select instead of a button
$select.change(function() {
    window.location = $select.val();
});
