#Programa para ver si se puede hacer una tranferencia en un banco. Practica de logica de Platzi

print("Bienvenido al Banco del Cerdo Capitalista")

#variables
banco_cliente = input("Ingrese el nombre de su banco: \n")
hora_t = int(input("Ingrese la hora en la que desea que se haga la transferencia: \n"))
numero_cuenta_cliente = input("Ingrese su numero de cuenta: \n")
banco_destino = input("Ingrese el nombre del banco del destinatario: \n")
numero_cuenta_destino = input("Ingrese el numero de cuenta del destinatario: \n")
costo_t = 100 if banco_cliente != banco_destino else 0#Operador ternario. Sirve si queremos colocar el valor de una variable dependiendo de una condicion
transferido = 1000000 + costo_t


#condicionales
if (numero_cuenta_cliente and numero_cuenta_destino and (hora_t >= 9 and hora_t <= 12 or hora_t >= 15 and hora_t <= 20)):
    print("El monto transferido es: ", transferido)
else:
    print("No se puede hacer tu transferencia")

