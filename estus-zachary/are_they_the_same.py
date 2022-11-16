def comp(array1, array2):
    print(array1)
    print(array2)
    if(array1 == None):
        return False
    if(array1 == [] and array2 == []):
        return True
    if(array2 is None or array2 == []):
        return False
    if(array2[0] == 1 and len(array2) == 1):
        return False
    squared_array = []
    for num in array1:
        squared_array.append(num * num)
    for num in array2:
        if(num in squared_array):
            squared_array.remove(num)
    if( len(squared_array) != 0):
        return False
    return True
    
