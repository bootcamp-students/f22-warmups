def find_short(s):
    s = s.split(' ')
    w = min(s, key=len)
    return len(w) # l: shortest word length
