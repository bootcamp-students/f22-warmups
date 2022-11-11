def spoonerize(words):
    # ...aaaaand SPOONERIZE!
    working_array = words.split()
    hold_1 = ""
    hold_2 = ""
    ret_string = ""
    count = 0
    while count < 1:
        hold_1 = hold_1 + working_array[0][count]
        count = count + 1
    count = 0
    while count < 1:
        hold_2 = hold_2 + working_array[1][count]
        count = count + 1
    
    print (hold_1, hold_2)
    
    
    ret_1 = ""
    ret_2 = ""
    
    ret_1 = working_array[0].replace(hold_1, hold_2, 1)
    ret_2 = working_array[1].replace(hold_2, hold_1, 1)

    return ret_1 + " " + ret_2
