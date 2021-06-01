var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

var draw = document.getElementById("canvas");
var ancho = document.getElementById("ancho_linea");
var papel = draw.getContext("2d");
var xf, yf, xi, yi;
var colorcito = document.getElementById("color");
var pintar = false;
draw.addEventListener("mousedown", dibujando);
function dibujando(evento) {
  pintar = true;
  xi = evento.offsetX;
  yi = evento.offsetY;
  console.log(evento);
  draw.addEventListener("mousemove",function(evento_2) {
    if (pintar && "onmousedown") {
      xf = evento_2.offsetX;
      yf = evento_2.offsetY;
      dibujarlinea(colorcito, xi, yi, xf, yf, papel);
      xi = xf;
      yi = yf;
      draw.addEventListener("mouseup", apagando);
      draw.addEventListener("mouseout", apagando);
      function apagando () {
        console.log("Gola")
        pintar = false;
}
}
}, false);
}
// funcion para dibujar en el canvas

function dibujarlinea(color, xi, yi, xf, yf, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color.value;
  lienzo.lineWidth = ancho.value;
  lienzo.lineJoin = "round";
  lienzo.moveTo(xi, yi);
  lienzo.lineTo(xf, yf);
  lienzo.stroke();
  lienzo.closePath();
}