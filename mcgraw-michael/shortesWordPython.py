def find_short(s):
    
    l = 'ssssssssssssssssssssssssssssssssssssssssssssssssss'
    
    words = s.split()
    
    for x in words:
        if len(x) < len(l):
            l = x
    return len(l)
