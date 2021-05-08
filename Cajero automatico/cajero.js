//Programa para crear un cajero automaatico

var imagenes = [];//Para la fuente de las imagenes
imagenes["1"] = "1dolarbill.jpg";
imagenes["5"] = "5dolarbill.jpg";
imagenes["10"] = "10dolarbill.jpg";
imagenes["20"] = "20dolarbill.jpg";
imagenes["50"] = "50dolarbill.jpg";
imagenes["100"] = "100dolarbill.jpg";

class Billetes{
    constructor(valor, cantidad){ //para construir la clase del billere
        this.valor = valor;//valor monetario de los billetes
        this.cantidad = cantidad;//cantidad de billetes
        this.imagen = new Image();//imagen del billete
        this.imagen.src = imagenes[this.valor];//Fuente de la imagen
    }
}
var bi = document.getElementById("extraer");//Para iniciar el proceso
var saldo = 0; //Para saber el saldo del cajero
var caja = [(new Billetes(100,3)), (new Billetes(50, 5)), (new Billetes(20, 10)), (new Billetes(10, 10)), (new Billetes(5, 20)), (new Billetes(1,20))];//Los billetes en caja
for (var e of caja) {
    saldo = saldo + (e.valor * e.cantidad);
    console.log(saldo);
}
function entregardinero(){//Funcion que realiza la operacion
    var entregado =[];//Array con la plata entregada
    var dinero = 0;//Dinero a recolectar del cajero
    
    var div, papeles;
    var t = document.getElementById("dinero");//Dinero a recolectar del cajero
    dinero = parseInt(t.value);
    var resultado = document.getElementById("resultado");
    if (saldo < dinero) {//Para asegurarse de que el programa solo corra cuando el saldo sea superior al dinero requerido
        resultado.innerHTML +=("<br>Soy un cajero pobre y no tengo dinero "+ parseInt(t.value) +":(<br>");//Para cuando no haya suficiente
        return;
        }
    for (var b of caja) { 
        if (dinero > 0) {
            div = Math.floor(dinero/b.valor);//Para saber el numero de billetes
            if (div>b.cantidad) {
                papeles = b.cantidad;
            }
            else{
                papeles = div;
            }
            entregado.push(new Billetes(b.valor, papeles));
            dinero = dinero - (b.valor * papeles);
        }
        
    }   
    for(var i = 0;i < caja.length;i++){//Para eliminar los billetes usado de la caja
        if(entregado[i] != null){
            caja[i].cantidad = caja[i].cantidad - entregado[i].cantidad;
        }
    }
    if (dinero > 0) {
        resultado.innerHTML +=("<br>Soy un cajero pobre y no tengo dinero "+ parseInt(t.value) +":(<br>");//Para cuando no haya suficiente
    }
    else{
        resultado.innerHTML = '';
        for (var e of entregado){
            if (e.cantidad > 0) {//Para no imprimir cuando no hayan billetes
                resultado.innerHTML += (e.cantidad + " billetes de $" + e.valor + "<br/>");//Para imprimir los billetes
                for(var x = 0; x<e.cantidad;x++){
                    resultado.innerHTML += "<img src=" + e.imagen.src + " />";//Bucle para mostrar las imagenes de todos los billetes
                }
                resultado.innerHTML += ("<br>");//Nueva linea
                saldo = saldo - (e.valor * e.cantidad);//Para obtener el nuevo saldo despues del retiro
                console.log(saldo);
                } 
            }
        }
    }
bi.addEventListener("click", entregardinero);