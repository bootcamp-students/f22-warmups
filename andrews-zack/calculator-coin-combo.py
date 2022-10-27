import math

def coin_combo(c):
    q = 0
    d = 0
    n = 0
    p = 0
    if c >= 25:
        q = math.floor(c/25)
        c = c - (q*25)
    if c >= 10:
        d = math.floor(c/10)
        c = c - (d*10)
    if c >= 5:
        n = math.floor(c/5)
        c = c - (n*5)
    if c >= 1:
        p = c
    return [p, n, d, q]
