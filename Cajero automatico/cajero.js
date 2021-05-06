//Programa para crear un cajero automaatico

class Billetes{
    constructor(valor, cantidad){ //para construir la clase del billere
        this.valor = valor;
        this.cantidad = cantidad;
    }
}
var dinero = 0;//Dinero a recolectar del cajero(futuro a poner por el user)
var b = document.getElementById("extraer");
b.addEventListener("click", entregardinero);

function entregardinero(){
    
    caja = [(new Billetes(50, 10)), (new Billetes(20, 20)), (new Billetes(10, 20))];//Los billetes en caja
    var entregado =[];//Array con la plata entregada
    var div, papeles;
    var t = document.getElementById("dinero");//Dinero a recolectar del cajero(futuro a poner por el user)
    dinero = parseInt(t.value);
    for (var b of caja) {
        var i = 0;
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
    var resultado = document.getElementById("resultado");
    if (dinero > 0) {
        resultado.innerHTML +=("<br>Soy un cajero pobre y no tengo dinero :( <br>");
    }
    else{
        for (var e of entregado) {
            resultado.innerHTML += (e.cantidad + " billetes de $" + e.valor+ "<br>");
            
        }
    }
}
    /*for (var i in entregado) {
        resultado.innerHTML += (Object.values(entregado[i]) + "<br>");
        }
    }*/