
$(document).ready(function() {
  // Tu código va aquí

  $("#start_btn").click(function(){
    clean();
    var num_t = setInterval(time, 1000);
    var x = 3;
    function time(){
      if (x == 0){
        clearInterval(num_t);
        $("#contador").text("Empieza");
        move();
        // who_win();
      }else{
        $("#contador").text(x);
        x -= 1;
      }
    }
  });
});


function move(){
    var t = 0;
    var y = 0;
    var det1 = false;
    var det2 = false;
    var move_space = setInterval(move_s, 1);
    var move_space_s = setInterval(move_s_s, 1);
    
    function move_s(){
      if (t == 100){
        clearInterval(move_space);
      }else{
        $(".active:first").animate({"left":t+"%"},0.5);
        t += 1;
        
      $(document).keyup(function(tecla){ 
          if (tecla.keyCode == 65) { //tecla A
            // clearInterval(move_space);
            // console.log("tecla A");
            det1 = true;
          }
      });
      if (det1 == true)
        clearInterval(move_space)
        det1 = false;
        // who_win();
      }
    }
    function move_s_s(){
      if (y == 100){
        clearInterval(move_space_s);
      }else{
        $(".active:last").animate({"left":y+"%"},0.5);
        y += 1;

      $(document).keyup(function(tecla){ 
      if (tecla.keyCode == 76) { //tecla L
        det2=true;
        }
      });
      if (det2 == true)
        clearInterval(move_space_s);
        det2 = false;
        // who_win();
      }
    }
}


function clean(){
  $(".active:first").css("left","-0.5%");
  $("div.active").last().css("left","-0.5%");
}

// function detect_key(){
//   $(document).keyup(function(tecla){ 
//     if (tecla.keyCode == 65) { //tecla A
//       return true
//     }
//   });
// }

// function detect_key(){
//   $(document).keyup(function(tecla){ 
//   if (tecla.keyCode == 76) { //tecla L
//     return true
//     }
//   });
// }
function who_win() {
      var p1 = $(".active:first").position().left;
      var p2 = $(".active:last").position().left;

      var p1 = (p1*100)/ 510
      var p2 = (p2*100)/ 510

      if (p1 > p2 && p1 < 86){
        $("#winner").text("Jugador 1");
      }
      else if (p2 > p1 && p2 < 86){
        $("#winner").text("Jugador 2");
      }else{
        $("#winner").text("Ambos perdieron");
      }
}
