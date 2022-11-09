def parse(data):
    array = []
    x = 0
    for item in data:
        match item:
            case 'i':
                x += 1
            case 'd':
                x -= 1
            case 's':
                x *= x
            case 'o':
                array.append(x)
            case _:
                None
    # i ++ value of zero
    # d -- value
    # sq's      
    return array
