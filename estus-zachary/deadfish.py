def parse(data):
    fish = 0
    arr = []
    for char in data:
        match char:
            case 'i':
                fish += 1
            case 'd':
                fish -= 1
            case 's':
                fish *= fish
            case 'o':
                arr.append(fish)
    return arr
