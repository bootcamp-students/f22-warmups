def likes(names):
    print(len(names))
    match len(names):
        case 0:
            return 'no one likes this'
        case 1:
            return names[0] + ' likes this'
        case 2: 
            return names[0] + ' and ' + names[1] + ' like this'
        case 3:
            return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'
        case _:
            return names[0] + ', ' + names[1] + ' and ' + str(len(names)-2) + ' others like this'
