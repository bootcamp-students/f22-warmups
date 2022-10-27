import math

def coin_combo(cents):
    quarter = math.floor(cents / 25)
    dime = math.floor((cents % 25)/10)
    nickel = math.floor(((cents % 25)% 10)/5)
    penney = math.floor(cents % 5)

    return [penney, nickel, dime, quarter]
