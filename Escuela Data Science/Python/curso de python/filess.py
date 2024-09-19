# file = open("./text.txt")

# print(file.readline())
# print(file.readline())

# print(file.readline())

# for line in file:
#   print(line)

# file.close()


with open('./text.txt','r+') as file:
  
  file.write("bello\n")

  for line in file:
   print(line)