def sq_in_rect(lng, wdth):
    x = lng
    y = wdth
    if x == y:
        return None
        
    result = []
    while y != x:
        if y > x:
            y -= x
            result.append(x)
        elif x > y:
            x -= y
            result.append(y)

    result.append(y)
    
    return result
