def find_short(s):
    s = s.split(' ')
    this = []
    for x in s:
        this.append(len(x))
    this.sort()
    return this[0]
