def parse(data):
    response = []
    count = 0
    for letter in data:
        if letter == 'i':
            count += 1
        elif letter == 'd':
            count -= 1
        elif letter == 's':
            count *= count
        elif letter == 'o':
            response.append(count)
    return response
