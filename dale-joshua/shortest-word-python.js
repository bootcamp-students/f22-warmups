def find_short(s):
    s = s.split(' ')
    return len(sorted(s, key=len)[0])
