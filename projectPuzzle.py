import math
import pprint

pp = pprint.PrettyPrinter(indent=4, compact=True)
# data set
DATA_ONE = lambda n : 1 + (math.floor(n * math.pi ** 11) % 30)
DATA_TWO = lambda n : 1 + (math.floor(n * math.e ** 11) % 30)
DATA_THREE = lambda n : 1 + ((n * 53) % 30)
DATA_FOUR = lambda n :  1 + ((n * 29) % 30)

# data list generator
def dataGenerator(data): 
    checked = {}
    result = []

    x = 1
    while len(result) < 90:
        currentValue = data(x)
        if currentValue in checked:      
            checked[currentValue] += 1 
        else:
            checked[currentValue] = 1 
        if checked[currentValue] < 4:
            result.append(currentValue)
        x += 1 
    # print(checked)
    return result 

# chunking list into 3s: 
def chunks(lst, n):
    for i in range(0, len(lst), n):
        yield lst[i:i + n]    

print('DATA_ONE')
pp.pprint(list(chunks(dataGenerator(DATA_ONE), 3)))
print('DATA_TWO')
pp.pprint(list(chunks(dataGenerator(DATA_TWO), 3)))
print('DATA_THREE')
pp.pprint(list(chunks(dataGenerator(DATA_THREE), 3)))
print('DATA_FOUR')
pp.pprint(list(chunks(dataGenerator(DATA_FOUR), 3)))