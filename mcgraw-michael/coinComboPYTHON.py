def coin_combo(cents):
    quart = 0
    dimes = 0
    nickel = 0 
    penny = 0
    if cents >= 25:
        quart = cents // 25
        cents = cents - (25 * quart)
    if cents >= 10:
        dimes = cents // 10
        cents = cents - (10 * dimes)
    if cents >= 5:
        nickel = cents // 5
        cents = cents - (5 * nickel)
    if cents >= 0:
        penny = cents;
        
    return [penny, nickel, dimes, quart]
