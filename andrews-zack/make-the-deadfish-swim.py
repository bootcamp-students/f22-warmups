# convert string into an array where each letter is an index
# write a for loop to iterate through each index
# if statements for each possible letter in the input data

def parse(data):
    value = 0
    keith = []
    d = [*data]
    for x in d:
        if x == "i":
            value += 1
        elif x == "d":
            value -= 1
        elif x == "s":
            value = value ** 2
        elif x == "o":
            keith.append(value)
        else:
            continue
    return keith
