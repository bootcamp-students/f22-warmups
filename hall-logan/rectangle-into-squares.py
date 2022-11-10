
def sq_in_rect(lng, wdth):
    if lng == wdth:
        return None
    result=[]
    while lng != wdth:
        if lng > wdth:
            lng -= wdth
            result.append(wdth)
        elif lng < wdth:
            wdth -= lng
            result.append(lng)
            
    result.append(lng)
            
    return result
