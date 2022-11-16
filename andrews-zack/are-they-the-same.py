def comp(array1, array2):
    if array1 == None or array2 == None:
        return False
    a1 = [x ** 2 for x in array1]
    a3 = sorted(a1)
    a2 = sorted(array2)
    if a3 == a2:
        return True
    else:
        return False
