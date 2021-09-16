//Codigo js de pakiman, royecto de platzi

var imagenes = [];//array para guardar las imagenes
imagenes["Cauchin"] = "vaca.webp";
imagenes["Pokacho"] = "pollo.webp";
imagenes["Tocinauro"] = "cerdo.webp";

//clase Pakiman
class Pakiman{
    constructor(nombre, v, a){
        this.nombre = nombre; //nombre del pakiman
        this.tipo= "tierra"; //tipo del pakiman 
        this.vida = v; //vida del pakiman
        this.ataque = a;//ataque del pakiman
        this.imagen = new Image(); //imagen del pakiman

        this.imagen.src = imagenes[this.nombre]; //fuente de la imagen del pakiman
    }
    hablar(){//funcion para mostrar un alert
        alert(this.nombre);
    }
    mostrar(){//funcion para mostrar los datos de los pakimanes
        document.body.appendChild(this.imagen);
        document.write("<p>");
        document.write("<strong>" + this.nombre + "</strong><br />");
        document.write("Vida: "+ this.vida + "<br />");
        document.write("Ataque: "+ this.ataque + "<hr />");
        document.write("</p>");
    }
}

var cauchin = new Pakiman("Cauchin", 100, 30);
var pokacho = new Pakiman("Pokacho", 80, 50);
var tocinauro = new Pakiman("Tocinauro", 120, 40);
var coleccion =[];
coleccion.push(cauchin, pokacho, tocinauro);
console.log(cauchin, tocinauro, pokacho);
for(var freddito of coleccion){//bucle for para usar la funcion mostrar(se puede usar for in tipo python)
    freddito.mostrar();
}