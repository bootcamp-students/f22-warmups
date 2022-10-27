def coin_combo(cents):
    coins = [0,0,0,0]
    print("In: ", cents)
    coins[3] = cents // 25
    print(cents, "// 25 = ", coins[3])
    cents = cents - coins[3]*25
    print("Cents is now: ", cents)
    coins[2] = cents // 10
    print(cents, "// 10 = ", coins[2])
    cents = cents - coins[2]*10
    print("Cents is now: ", cents)
    coins[1] = cents // 5
    print(cents, "// 5 = ", coins[2])
    cents = cents - coins[1]*5
    print("Cents remaining: ", cents)
    coins[0] = cents
    return coins
