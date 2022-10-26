def find_short(s):
    s = s.split(' ')
    array = []
    for x in s:
        array.append(len(x))
    return min(array)
