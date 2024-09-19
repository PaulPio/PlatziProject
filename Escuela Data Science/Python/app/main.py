import utils
data = [
  {
    'Country': 'Colombia',
    'Population': 500
  },
  {
    'Country': 'Bolivia',
    'Population': 300
  }
]
def run():
  keys, value = utils.get_population()
  print(keys,value)
  # print(utils.a)
  # return data
  country = str.title(input('Type Country => '))
  
  result = utils.population_by_country(data, country)
  print(result)

if __name__ == '__main__':
  run()