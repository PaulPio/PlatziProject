var jf = require("johnny-five");
var circuito = new.jfBoard();

circuito.on("ready", prender);

function prender(){
    var led = new jf.Led(13);
    led.blink(500);
}