#Programa para buscar el precio de fiat o de cripto en usd
#Se usa la libreria de coinmarketcapapi 
from coinmarketcapapi import CoinMarketCapAPI, CoinMarketCapAPIError

def run():
    """ To run the program"""
    
    cmc = CoinMarketCapAPI('a51e0316-a6e1-49f6-a412-1417d444d1a9') #Api clave

    #r = cmc.cryptocurrency_info(symbol='BTC')  #Para obtener info acerca del symbolo

    buscar = input("Coloque el simbolo de la cripto que desee encontrar: \n")

    try:
        data_quote = cmc.cryptocurrency_quotes_latest(symbol=buscar, convert='USD') #Para obtener el precio de una cripto
        print("El nombre de la cripto es: " + str(data_quote.data[buscar]['name'])) #Para imprimir el precio buscando en la api
        print("El precio es : " + str(data_quote.data[buscar]['quote']['USD']['price'])) #Para imprimir el precio buscando en la api
    except Exception:
        print("Hubo un problema")



if __name__ == "__main__":
    run()