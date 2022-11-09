def likes(names):
    num_of_names = len(names)
    if num_of_names == 0:
        return f'no one likes this'
    elif num_of_names == 1:
        return f'{names[0]} likes this'
    elif num_of_names == 2:
        return f'{names[0]} and {names[1]} like this'
    elif num_of_names == 3:
        return f'{names[0]}, {names[1]} and {names[2]} like this'
    elif num_of_names >= 4:
        return f'{names[0]}, {names[1]} and {num_of_names - 2} others like this'
