def london_city_hacker(journey): 
    bus_count = 0
    tube_count = 0
    bus_flag = False
    fare = ""
    # your code here
    for x in journey:
        if ((type(x) == int) and (bus_flag==False)):
            bus_flag=True
            bus_count = bus_count + 1
        elif ((type(x) == int) and (bus_flag==True)):
            bus_flag=False
        elif ((type(x) != int) and (bus_flag==True)):
            bus_flag=False
            tube_count = tube_count + 1
        else:
            tube_count = tube_count + 1
            
    fare = tube_count * 2.4
    fare = fare + ((bus_count) * 1.5)
    
    return(f"£{fare:.2f}")
    
