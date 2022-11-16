def comp(a1, a2):
    
    a3 = []
    if a1 == None or a2 == None:
        return False

    for x in a1:
        a3.append(x**2)
    if sorted(a2) == sorted(a3):
            return True      
    return False
	
