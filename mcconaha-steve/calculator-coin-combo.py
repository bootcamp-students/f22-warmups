import math
def coin_combo(cents):
    quarters = math.floor(cents / 25)
    cents -= quarters * 25
    dimes = math.floor(cents / 10)
    cents -= dimes * 10
    nickles = math.floor(cents / 5)
    cents -= nickles * 5
    pennies = cents
    return [pennies, nickles, dimes, quarters]
