def rot13(message):
    print(message)
    x ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    y = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm"
    mytable = message.maketrans(x, y)

    return(message.translate(mytable))
