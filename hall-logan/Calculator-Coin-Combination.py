def coin_combo(cents):
    penny = 0
    nickle = 0
    dime = 0
    quarter = 0
    
    while cents >= 25:
        cents -= 25
        quarter += 1
        print(quarter)
        
    while cents >= 10:
        cents -= 10
        dime += 1
        print(dime)
        
    while cents >= 5:
        cents -= 5
        nickle += 1
        print(nickle)
        
    while cents > 0:
        cents -= 1
        penny += 1
        print(penny)
    
    return [penny, nickle, dime, quarter]
