def parse(data):
    arr = []
    value = 0
    for x in data:
        if x == 'i': value +=1
        if x == 'd': value -=1
        if x == 's': value = value ** 2
        if x == 'o': arr.append(value)
    return arr
