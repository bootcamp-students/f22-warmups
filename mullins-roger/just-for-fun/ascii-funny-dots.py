def dot(n,m):
    
    across_dashes = "+"
    across_dots = "\n|"
    return_string = ""
    count = 0
    
    while count < n:
        across_dashes = across_dashes + "---+"
        count = count+1
    
    count = 0
    
    while count < n:
        across_dots = across_dots + " o |"
        count = count+1
    across_dots = across_dots + "\n"
    
    count = 0
    
    while count < m:
        return_string = return_string + across_dashes
        return_string = return_string + across_dots
        count = count + 1
        
    return_string = return_string + across_dashes
    
    print(return_string)
    
    return return_string
 
