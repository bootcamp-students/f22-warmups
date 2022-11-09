def parse(data):
    # TODO: your code here
    result = 0
    result_array = []
    for char in data:
        if char == 'i':
            result += 1
        elif char == 'd':
            result -= 1
        elif char == 's':
            result *= result
        elif char == 'o':
            result_array.append(result) 
    return result_array
