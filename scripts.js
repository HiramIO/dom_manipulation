$(document.ready(function)(){
    $

    var newHeader = $('<h1>').html("This was added via jquery");

    $('<div class="container"></div>')
        .append(newHeader)
        .appendTo('body');
});