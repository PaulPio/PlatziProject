import csv

def read_csv(path):
  with open(path, 'r') as csvfile:
    reader = csv.reader(csvfile, delimiter=',')
    header = next(reader)
    data = []
    # userinput = str.title(input("\nWrite country name: \n"))
    for row in reader:
      # if userinput in row[2]:
      iterable = zip(header, row)
      country_dict = {key: value for key, value in iterable}
      data.append(country_dict)
    return data

if __name__ == '__main__':
  data = read_csv('./app/world_population.csv')
  print(data[0])
  new_data = list(filter(lambda item: item['Country/Territory'] == 'Argentina', data))
  print(new_data)
