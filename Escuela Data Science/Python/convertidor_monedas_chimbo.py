#Para convertir a bolivar de dolar

bolivar = 4000000 #Precio del dolar 

dolar = int(input("Ingrese la cantidad de dolares que desee cambiar a bolivares: \n")) 

resultado = dolar * bolivar#Multiplicar los dolares que se desee cambiar por la tasa de cambio a bolivares
#Imprimir resultado
print(f"El valor de los {bolivar} Bss en dolares es de {resultado}")