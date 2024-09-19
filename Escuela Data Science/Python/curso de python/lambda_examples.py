def increment(x):
  return x + 1


print(increment(2))

increment_2 = lambda x: x + 1

result = increment_2(20)
print(result)

full_name = lambda name, last_name: f'Full name is {name.title()} {last_name.title()}'

text = full_name('paul', 'Piotrowski')
print(text)
