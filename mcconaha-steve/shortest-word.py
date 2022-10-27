def find_short(s):
    arr = []
    s = s.split()
    for word in s:
        print(len(word))
        arr.append(len(word))
    return min(arr)
