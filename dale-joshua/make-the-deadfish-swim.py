def parse(data):
    value = 0
    array = []
    for character in data:
        match character:
            case 'o':
                array.append(value)
            case 'i':
                value += 1
            case 'd':
                value -= 1
            case 's':
                value *= value

    return array
