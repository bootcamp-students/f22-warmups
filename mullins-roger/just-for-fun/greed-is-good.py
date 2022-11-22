def score(dice):
    # your code here
    roll_count = [0]
    for x in range(7):
        roll_count.insert(x, dice.count(x))
    print("Roll in: ", dice)
    print("Count: ", roll_count)
    
    score = 0
    
    if roll_count[1] >= 3:
        score = score + 1000
    
    if roll_count[6] >= 3:
        score = score + 600
        
    if roll_count[5] >= 3:
        score = score + 500
        
    if roll_count[4] >= 3:
        score = score + 400
    
    if roll_count[3] >= 3:
        score = score + 300
        
    if roll_count[2] >= 3:
        score = score + 200
        
    if roll_count[1] == 1:
        score = score + 100
        
    if roll_count[1] > 3:
        score = score + ((roll_count[1]-3)*100)
        
    if roll_count[1] == 2:
        score = score + ((roll_count[1]*100))
        
    if roll_count[5] == 1:
        score = score + 50
        
    if roll_count[5] == 2:
        score = score + 100
        
    if roll_count[5] > 3:
        score = score + ((roll_count[5]-3)*50)
