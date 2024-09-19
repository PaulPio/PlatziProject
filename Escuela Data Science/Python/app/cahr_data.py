import csv
import charts


def read_csv(path):
  with open(path, 'r') as csvfile:  #se abre el archivo csv como csvfile
    reader = csv.reader(
        csvfile, delimiter=','
    )  #se lee el archivo csv y se le asigna la variable reader
    header = next(
        reader
    )  #se lee la primera linea del archivo csv y se le asigna la variable header
    data = [
    ]  #Se crea la lista data para almacenar la informacion del archivo csv
    for row in reader:  #se recorre cada fila del archivo csv
      iterable = zip(
          header, row
      )  #se une el header con la fila actual y se le asigna la variable iterable
      country_dict = {
          key: value
          for key, value in iterable
      }  #se crea un diccionario con la informacion de la fila actual
      data.append(country_dict)  #se agrega el diccionario a la lista data
    return data  #se devuelve la lista data con la informacion del archivo csv


def get_population(data):
  """Esta funcion obtiene la informacion de la poblacion y la devuelve en un diccionario"""
  userinput = str.title(input("\nWrite country name: \n"))  #se le pide al usuario que ingrese el nombre del pais
  new_data = list(
      filter(lambda item: item['Country/Territory'] == userinput, data)
  )  # se filtra la informacion del archivo csv por el nombre del pais ingresado por el usuario y se le asigna la variable new_data
  years = [
      i for i in new_data[0] if 'Population' in i]  # se obtiene la informacion de los anos q se tiene informacion del pais ingresado por el usuario y se le asigna un valor
  population_bruto = [value for key, value in new_data[0].items() if 'Population' in key]  #Se obtiene la informacion de la poblacion del pais ingresado por el usuario y se le asigna un valor
  population = [float(i) for i in population_bruto] # se pasa la poblacio a entero
  result = list(zip(years, population) ) #Se une las dos listas anteriores y se le asigna la variable result
  print(result)  #Se imprime la variable result

  return years,population  #Se devuelve las listas years and populaiton

def generate_chart(data):
  """Esta funcion va a generar una barra de poblacion por ano"""
  years,population = get_population(data) #Se obtiene la informacion de la poblacion y el ano de cada pais
  if len(years or population) > 0: #Se verifica q la informacion obtenida sea mayor a 0
    charts.generate_bar_char(years, population) # Se corre la funcion para generar las barras
    

def get_world_percentages(data):
    """Funcion para obterner los porcentajes de los paises  y los nombres de los paises para generar una grafica de pie"""

    new = str.title(input("\nWrite a continent: \n")) # Se obtiene el nombre del continente a graficar

    data =  list(filter(lambda item : item['Continent'] == new, data)) # Se filtran los paises del continete
    #se obitene nombre de pais y valor de porcentaje de poblacion con un dict comprehension
    percentages_dict = {item["Country/Territory"]: float(item["World Population Percentage"]) for item in data}
    names = percentages_dict.keys() #El diccionario tiene como llave los nombres de los paises, estos se separa
    per = percentages_dict.values() #El valor de los diccionarios en el porcentaje de poblacion por pais
    print(names,per)
    charts.generate_pie_chart(names, per) # Se corre la funcion para generar las barras
    
        
  


if __name__ == '__main__':
  data = read_csv('world_population.csv')  #Ruta del archivo csv
  get_world_percentages(data)


