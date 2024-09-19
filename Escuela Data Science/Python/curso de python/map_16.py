items = [
    {
        'producto': 'camisa',
        'precio': 100,
        #'taxes': 100 * .19
    },
    {
        'producto': 'pantalones',
        'precio': 300,
        #'taxes': 100 * .19
    },
    {
        'producto': 'pantalones 2',
        'precio': 200,
        #'taxes': 100 * .19
    }
]

prices = list(map(lambda item: item['precio'], items))
products = list(map(lambda item: item['producto'], items))
#taxes = list(map(lambda item: item['taxes'], items))

# print(prices)
# print(products)
# #print(taxes)


def add_taxes(item):
    items_copy = item.copy()
    items_copy['taxes'] = items_copy['precio'] * .07
    return items_copy


#print(taxes)
new_items = list(map(add_taxes, items))
print(new_items)
print(items)


