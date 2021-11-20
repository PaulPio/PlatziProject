#Programa para numeros primos

def es_primo(numero):
    """Funcion para ver si un numero es primo"""
    contador = 0

    for i in range(1, numero + 1):
        if i == 1 or i == numero:
            continue
        if numero % i == 0:
            contador += 1

    if contador == 0:
        return True
    else:
        return False


def run():
    primo = int(input("Introduce un numero: "))
    if es_primo(primo):
        print("Es un numero primo")
    else:
        print("No es un numero primo")



if __name__ == "__main__":
    run()