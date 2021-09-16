var j = require("jonhnny-five");
var circuito = new j.Board();
var celda, bombillo, motorcito;
circuito.on("ready", prender);

function prender(){
    var configuracion = {pin: "A0", freq: 50};
    celda = new j.Sensor(configuracion);
    var turno = 0;
    bombillo = new j.Led(13);
    bombillo.on();

    motorcito = new j.Servo(9);
    motorcito.to(0);

    
    ondear();
}

function ondear() {
    console.log("Luz es: " + celda.value);
    
    var luz = celda.value;
    
    if (luz > 800) {
        if (turno == 1) {
            turno = 0;
            motorcito.to(160);
        }
        else{
            turno == 1;
            motorcito.to(190);
        }
    }
    else{
        motorcito.to(30);
    }
    setTimeout(ondear, 1000);

}