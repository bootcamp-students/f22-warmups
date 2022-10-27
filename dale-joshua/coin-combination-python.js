def coin_combo(cents):
    quart = 0;
    dime = 0;
    nic = 0;
    penny = 0;

    if (cents >= 25):
        quart = cents // 25
        cents = cents - (25 * quart)
    if (cents >= 10):
        dime = cents // 10
        cents = cents - (dime * 10)
    if (cents >= 5):
        nic = cents // 5
        cents = cents - (nic * 5)
    if (cents >= 0):
        penny = cents
    return [penny, nic, dime, quart]
