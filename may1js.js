$(document).ready(function(){
    $("#click-bait").on('click', function() {
        alert('link was clicked');
    });
});



// $('#click-bait').click(function(){
//     // Alternate method
// });

function secondLevelHandler() {
    console.log("Seconf level recieved event");
}

    $('#second-level').on('click', secondLevelHandler());

});


    var firstLevelHandler = function() {
        console.log("First level received event");
    }

    $('#first-levle').on('click', firstLevelHandler);
});



unvared = "I was declared without a var";





function name() {
    var name = "mina";

    function displayName() {
        return name + " is awesome!";
    }
    return displayName;
}