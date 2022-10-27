import math 
def coin_combo(cents):
    cents_in = cents
    
    quarters = cents_in//25
    cents_in = cents_in - (quarters*25)
    
    dimes = cents_in//10
    cents_in = cents_in - (dimes*10)
    
    nickels = cents_in//5
    cents_in = cents_in - (nickels*5)
    
    pennies = math.floor(cents_in)
    cents_in = cents_in - (pennies)
    
    return [pennies, nickels, dimes, quarters]
