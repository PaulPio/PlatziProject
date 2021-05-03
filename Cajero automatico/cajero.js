//Programa para crear un cajero automaatico

class Billetes{
    constructor(valor, cantidad){ //para construir la clase del billere
        this.valor = valor;
        this.cantidad = cantidad;
    }
}

caja = [(new Billetes(50, 1)), (new Billetes(20, 2)), (new Billetes(10, 2))];//Los billetes en caja

dinero = 30;//Dinero a recolectar del cajero(futuro a poner por el user)

var entregado =[];//Array con la plata entregada

var div, papeles;
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
for (var i in entregado) {
    document.write(Object.values(entregado[i]) + "<br>");
}

