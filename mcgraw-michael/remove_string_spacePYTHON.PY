def no_space(x):
    x = x.split()
    newstr = ''
    for char in x:
        if char == ' ':
            x.remove(char)
        else:
            newstr += char
    
    return newstr
