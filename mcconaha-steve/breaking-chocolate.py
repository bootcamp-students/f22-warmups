def break_chocolate(n, m):
    if n == 0 or m == 0:
        return 0
    elif n == 1 and m == 1:
        return 0
    else:
        return (n * m) - 1 
