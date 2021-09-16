#Programa para convertir monedas usando la api de exchanges rates api
#Program to covert currency using exchanges rates api
import requests
APIKEY = "d9613ad81bb7f07a9efe9535" #API CODE

# Welcome Message
print("Welcome to the currency convertor program.\n") 

#Introducing the tickets of the currencys
dato1= input("Introduce the first ticket currency to compare: \n")

dato2= input("Introduce the second ticket currency to compare: \n")

#url adding th apikey and the fist ticket
url = "https://v6.exchangerate-api.com/v6/" + APIKEY + "/latest/" + dato1

#accesing the url
info = requests.get(url)
#translating the json to a dictionary
data = info.json()
#Printing the conversion rate of the second ticket
print(data['conversion_rates'][dato2])