import math

def sq_in_rect(lng, wdth):

    if lng==wdth:
        return None
    list=[]
    if lng < wdth:
            lng,wdth=wdth,lng 
    while lng!=wdth:
        list.append(wdth)
        lng=lng-wdth
        if lng<wdth:
            lng,wdth=wdth,lng
    list.append(wdth)
    return list
