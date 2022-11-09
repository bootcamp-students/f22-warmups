def likes(names):
    length = len(names)
    extra = length - 2
    match length:
        case 0:
            return 'no one likes this'
        case 1:
            return f"{names[0]} likes this"
        case 2:
            return f"{names[0]} and {names[1]} like this"
        case 3:
            return f"{names[0]}, {names[1]} and {names[2]} like this"
        case _:
            return f"{names[0]}, {names[1]} and {extra} others like this"
    pass
