// $('td.active').next().addClass('active').prev().removeClass('active');
// recorrer cada td

// var time = 0;
// for( var i=0; i < 10; i++){
//   setTimeout(function(){
//     $('tr#Player1 td.active').next().addClass('active').prev().removeClass('active');
//   }, time += 100);
// }

$(document).ready(function() {
  // Tu código va aquí

  $("#start_btn").click(function(){
    limpiar();
    var time = 0;
    var x = 3;

    for (var i = 0; i < 4 ; i++){
      setTimeout(function(){
        $("#contador").text(x)

        if (x == "Empieza!"){
          comenzar();
        }

        x -= 1;
        (x != 0) ?  x : x = "Empieza!"
      }, time += 1000);
    }

    // $("#quien_gana").text("Ganardor: ¡Jugador 1!");
  });



});

  function comenzar(){
  var time = 0;
  var cont = 0;
  for( var i=0; i < 36; i++){
// console.log("yo esto en el principio de for: "+ i);
  setTimeout(function(index){
    $('tr#Player1 td.active').next().addClass("active").prev().removeClass("active");
    $('tr#Player2 td.active').next().addClass("active").prev().removeClass("active");
    
    key_press();
}, time += 30);
  // console.log("yo estoy al final de for: "+ i);
  }
  // console.log("yo estoy afuera de for: "+ i);

  }
function limpiar(){
  $('tbody tr#Player1, tbody tr#Player2').css('background-color','white'); 
  $('tbody tr#Player1, tbody tr#Player2, td').removeAttr('style');
  $('td').removeClass('active');
  $('tr#Player1 td').first().next().addClass('active');
  $('tr#Player2 td').first().next().addClass('active');
  $("#quien_gana").text("")
}

function key_press(pos){
  $(document).keyup(function(tecla){ 
    if (tecla.keyCode == 65) { 
      clearTimeout();
      $('tbody tr#Player1').css('background-color','springgreen'); 
      $('tr#Player1 td.active').css('background-color','black'); 
      $("#quien_gana").text("El Ganador!!! Jugador 1");                               // el usuario que gano
    }else if(tecla.keyCode == 76) { 
      $('tbody tr#Player2').css('background-color','springgreen'); 
      $('tr#Player2 td.active').css('background-color','black'); 
      $("#quien_gana").text("El Ganador!!! Jugador 2");                               // el usuario que gano
      // console.log(pos + "aqui presiono num 2 ");
    } 
    
  });
}