#Programa para buscar el precio de fiat o de cripto en usd
#Se usa la libreria de coinmarketcapapi 
from coinmarketcapapi import CoinMarketCapAPI, CoinMarketCapAPIError

cmc = CoinMarketCapAPI('a51e0316-a6e1-49f6-a412-1417d444d1a9') #Api clave

#r = cmc.cryptocurrency_info(symbol='BTC')  #Para obtener info acerca del symbolo

buscar = input("Coloque el simbolo de la cripto que desee encontrar: \n")

try:
    data_quote = cmc.cryptocurrency_quotes_latest(symbol=buscar, convert='USD') #Para obtener el precio de una cripto
    print(data_quote.data[buscar]['quote']['USD']['price']) #Para imprimir el precio buscando en la api
except Exception:
    print("Hubo un problema")