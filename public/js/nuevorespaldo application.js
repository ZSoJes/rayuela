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

  $("#start_btn").attr("disabled", "disabled");
  limpiar();
  var x = 3;
  var pos1 = 0;
  var pos2 = 0;
  var res = false;
  var num_t = setInterval(time, 1000);

  function time(){
    if (x == 0){
      clearInterval(num_t)
      $("#contador").text("Empieza");
      var p1 = setInterval(move1, 10);
      var p2 = setInterval(move2, 10);


      function move1(){
        if(pos1 >= 45){
          clearInterval(p1);
          $("#start_btn").removeAttr("disabled");                                             // mientras dura el juego no esta disponible el boton jugar
        }else{
          $('tr#Player1 td.active').next().addClass("active").prev().removeClass("active");
          pos1 += 1;
          key_press_mio_nadamas(pos,p1);
        }
      }//cierre de move
      function move2(){
        if(pos2 >= 45){
          clearInterval(p2);
        }else{
          $('tr#Player2 td.active').next().addClass("active").prev().removeClass("active");
          pos2 += 1;
          key_press_mio_nadamas2(pos,p2);
        }
        }
    }else{
      $("#contador").text(x)
    }//cierre de else

    x -= 1;
  }//cierre de time

  });//boton jugar

});//document ready

function key_press_mio_nadamas(pos, p1){
  $(document).keyup(function(tecla){ 
    if (tecla.keyCode == 65) { //tecla A
      $("#quien_gana").text("El Ganador!!! Jugador 1");                               // el usuario que gano
      clearInterval(p1);
      $("#start_btn").removeAttr("disabled");                                         // mientras dura el juego no esta disponible el boton jugar
    } 
  });
}
function key_press_mio_nadamas2(pos, p2){
  $(document).keyup(function(tecla){ 
    if(tecla.keyCode == 76) { //tecla L
      $("#quien_gana").text("El Ganador!!! Jugador 2");                               // el usuario que gano
      clearInterval(p2);
      $("#start_btn").removeAttr("disabled");                                         // mientras dura el juego no esta disponible el boton jugar
    } 
  });
}


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
  $('#Player1, #Player2').css('background-color','white'); 
  $('td').removeClass('active');
  $('td:nth-child(2)').addClass('active'); //reinicia a los dos players
  $("#quien_gana").text("")
}

function key_press(pos){
  $(document).keyup(function(tecla){ 
    if (tecla.keyCode == 65) { //tecla A
      clearTimeout();
      $('tbody tr#Player1').css('background-color','springgreen'); 
      $('tr#Player1 td.active').css('background-color','black'); 
      $("#quien_gana").text("El Ganador!!! Jugador 1");                               // el usuario que gano
    }else if(tecla.keyCode == 76) { //tecla L
      $('tbody tr#Player2').css('background-color','springgreen'); 
      $('tr#Player2 td.active').css('background-color','black'); 
      $("#quien_gana").text("El Ganador!!! Jugador 2");                               // el usuario que gano
      // console.log(pos + "aqui presiono num 2 ");
    } 
    
  });
}
// $(document).ready(function() {
//   // Tu código va aquí
//   $("#start_btn").click(function(){
//       contador();
//   });//termina boton
// });
// function wait(time){
//   tiempo = setInterval(function(){
//     console.log("espera");
//   },time);
//   clearInterval(tiempo);
// }
// function contador(num){
//   var time = 1000;
//     for (var i=0;i<4;i++){
//       console.log("if" + i);
//       wait(time);
//     }
//     time = 0;
//   // var x = 3;
//   // for(var i = 0;i<4;i++){
//   //   setTimeout(function(){
//   //     console.log(x);
//   //       $("#contador").text(x);           //mostrar cotador
//   //         x -= 1
//   //       // }                                   //cierre for
//   //   }, time+=500);                           //cierre interval
//   // }
//   // clearTimeout(variable);
//       console.log(num);
// }
// function juego(){
//   // vari = setInterval(function(){

//   //   console.log("Empieza!!!");
//   // },4000);
// }