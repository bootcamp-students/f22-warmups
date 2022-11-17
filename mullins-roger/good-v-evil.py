def good_vs_evil(good, evil):
    good_arr = good.split(" ")
    evil_arr = evil.split(" ")

    good_mul = ['1', '2', '3', '3', '4', '10']
    evil_mul = ['1', '2', '2', '2', '3', '5', '10']
    
    good_tot = 0
    evil_tot = 0
    
    count = 0
    
    while count < 6:
        good_tot = good_tot + (int(good_arr[count]) * int(good_mul[count]))
        count = count + 1
    
    count = 0    
    
    while count < 7:
        evil_tot = evil_tot + (int(evil_arr[count]) * int(evil_mul[count]))
        count = count + 1
    
    return_string = ""
    
    if good_tot > evil_tot:
        return_string = "Battle Result: Good triumphs over Evil"
        
    if evil_tot > good_tot:
        return_string = "Battle Result: Evil eradicates all trace of Good"
        
    if evil_tot == good_tot:
        return_string = "Battle Result: No victor on this battle field"
    
    return return_string
