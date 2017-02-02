$(document).ready(function() {
  // Tu código va aquí
  $("#start_btn").click(function(){
      contador();
  });//termina boton
});
function wait(time){
  tiempo = setInterval(function(){
    console.log("espera");
  },time);
  clearInterval(tiempo);
}
function contador(num){
  var time = 1000;
    for (var i=0;i<4;i++){
      console.log("if" + i);
      wait(time);
    }
    time = 0;
  // var x = 3;
  // for(var i = 0;i<4;i++){
  //   setTimeout(function(){
  //     console.log(x);
  //       $("#contador").text(x);           //mostrar cotador
  //         x -= 1
  //       // }                                   //cierre for
  //   }, time+=500);                           //cierre interval
  // }
  // clearTimeout(variable);
      console.log(num);
}
function juego(){
  // vari = setInterval(function(){

  //   console.log("Empieza!!!");
  // },4000);
}



function key_press(pos){
  $(document).keyup(function(tecla){ 
    if (tecla.keyCode == 65) { //tecla A
      $("#quien_gana").text("El Ganador!!! Jugador 1");                               // el usuario que gano
    }else if(tecla.keyCode == 76) { //tecla L
      $("#quien_gana").text("El Ganador!!! Jugador 2");                               // el usuario que gano
    } 
    
  });
}





