// Programa para hacer el dibujo de villa Platzi
// Primero obtenemos el canvas del archivo html
var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

// Segundo, creamos los objetos y las variables de cada imagen
var fondo = {
  url: "tile.webp",
  cargaOK: false
}
var vaca = {
  url: "vaca.webp",
  cargaOK: false
};

var pollo = {
  url: "pollo.webp",
  cargaOK: false
};
pollo.imagen = new Image(); //Se crea un objeto imagen
pollo.imagen.src = pollo.url; // Fuente la ubicacion de la imagen
pollo.imagen.addEventListener("load", cargarPollo); //Funcion con el que se carga una funcion y un objeto


var cerdo = {
  url: "cerdo.webp",
  cargaOK: false
};
cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

// variables para poner las imagenes de animales en un orden "aleatorio"

var cantidad2 = aleatorio(1, 10);
var cantidad = aleatorio(1, 10);
var cantidad3 = aleatorio(1, 10);
// Funciones para comprobar que las imagenes estan cargadas
function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}
function cargarVacas()
{
  vaca.cargaOK = true;
  dibujar();
}

function cargarCerdos()
{
  cerdo.cargaOK = true;
  dibujar();
}

function cargarPollo()
{
  pollo.cargaOK = true;
  dibujar();
}

//Funciones para dibujar villa platzi, Recordando que primero va el fondo,
//y luego los animales
function dibujar()
{
  if(fondo.cargaOK)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(vaca.cargaOK)
  {
    console.log(cantidad);
    for(var v=0; v < cantidad; v++)
    {
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 10);
      var x = x * 60;
      var y = y * 40;
      papel.drawImage(vaca.imagen, x, y);
    }
    if(pollo.cargaOK)
    {
      console.log(cantidad2);
      for(var v=0; v < cantidad2; v++)
      {
        var x = aleatorio(0, 7);
        var y = aleatorio(0, 10);
        var x = x * 60;
        var y = y * 40;
        papel.drawImage(pollo.imagen, x, y);
  }
}
}
if(cerdo.cargaOK)
{
  console.log(cantidad3);
    var x = aleatorio(0, 7);
    var y = aleatorio(0, 10);
    var x = x * 60;
    var y = y * 40;
    papel.drawImage(cerdo.imagen, x, y);
    if(evento.keyCode){
      moverAnimal(cerdo);
    }
}
}

// Funcion para obtener numeros "aleatorios"
function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}

// Si queremos mover al cerdo entonces

// variable tipo objetos c= x y y=p
var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};
document.addEventListener("keydown", moverAnimal);
var cuadrito = document.getElementById("villaplatzi");
var papel = cuadrito.getContext("2d");

function moverAnimal(evento)
{
  var x; var y;
  var movimiento = 5;
  switch(evento.keyCode)
  {
    case teclas.UP:
      y = y - movimiento;
      papel.drawImage(cerdo.imagen, x, y);
    break;
    case teclas.DOWN:
      y = y + movimiento;
      papel.drawImage(cerdo.imagen, x, y);
    break;
    case teclas.LEFT:
      x = x - movimiento;
      papel.drawImage(cerdo.imagen, x, y);
    break;
    case teclas.RIGHT:
      x = x + movimiento;
      papel.drawImage(cerdo.imagen, x, y);
    break;
  }
}
