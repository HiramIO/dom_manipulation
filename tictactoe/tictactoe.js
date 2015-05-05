var count = 0;

function checkX(){
  if (($('#1').hasClass("X") === true) && ($('#2').hasClass("X") === true) && ($('#3').hasClass("X")) === true) {
    return true;
  } else if (($('#4').hasClass("X") === true) && ($('#5').hasClass("X") === true) && ($('#6').hasClass("X")) === true) {
    return true;
  } else if (($('#7').hasClass("X") === true) && ($('#8').hasClass("X") === true) && ($('#9').hasClass("X")) === true) {
    return true;
  } else if (($('#1').hasClass("X") === true) && ($('#4').hasClass("X") === true) && ($('#7').hasClass("X")) === true) {
    return true;
  } else if (($('#2').hasClass("X") === true) && ($('#5').hasClass("X") === true) && ($('#8').hasClass("X")) === true) {
    return true;
  } else if (($('#3').hasClass("X") === true) && ($('#6').hasClass("X") === true) && ($('#9').hasClass("X")) === true) {
    return true;
  } else if (($('#1').hasClass("X") === true) && ($('#5').hasClass("X") === true) && ($('#9').hasClass("X")) === true) {
    return true;
  } else if (($('#7').hasClass("X") === true) && ($('#5').hasClass("X") === true) && ($('#3').hasClass("X")) === true) {
    return true;
  } else {
    return false;
  }
}

function checkY(){
  if (($('#1').hasClass("O") === true) && ($('#2').hasClass("O") === true) && ($('#3').hasClass("O")) === true) {
    return true;
  } else if (($('#4').hasClass("O") === true) && ($('#5').hasClass("O") === true) && ($('#6').hasClass("O")) === true) {
    return true;
  } else if (($('#7').hasClass("O") === true) && ($('#8').hasClass("O") === true) && ($('#9').hasClass("O")) === true) {
    return true;
  } else if (($('#1').hasClass("O") === true) && ($('#4').hasClass("O") === true) && ($('#7').hasClass("O")) === true) {
    return true;
  } else if (($('#2').hasClass("O") === true) && ($('#5').hasClass("O") === true) && ($('#8').hasClass("O")) === true) {
    return true;
  } else if (($('#3').hasClass("O") === true) && ($('#6').hasClass("O") === true) && ($('#9').hasClass("O")) === true) {
    return true;
  } else if (($('#1').hasClass("O") === true) && ($('#5').hasClass("O") === true) && ($('#9').hasClass("O")) === true) {
    return true;
  } else if (($('#7').hasClass("O") === true) && ($('#5').hasClass("O") === true) && ($('#3').hasClass("O")) === true) {
    return true;
  } else {
    return false;
  }
}


function checkBoard(){
  console.log(count);
  if(count === 8) {
    alert("Its a draw!");
  } else {
    if (count % 2 === 0) {
      if (checkX()) {
          alert("X WINS!");
      }
    } else if (count % 2 === 1) {
      if (checkY()) {
        alert("O WINS!");
      }
    }
  }
}







$('td').on('click', function(){
  if ($(this).is(':empty')){
    if (count % 2 === 0) {
      $(this).text("X");
      $(this).addClass("X");
      checkBoard();
      count ++;
    } else {
    $(this).text("O");
      $(this).addClass("O");
      checkBoard();
      count ++;
    }
  }
});


