import math

def comp(array1, array2):
    list1 = array1
    list2 = array2
    if list1 == None or list2 == None:
        return False
    list1sqr = []
#     for x in list2:
#         list1sqr.append(math.sqrt(x))
    for x in list1:
        list1sqr.append(x*x)
    list2.sort()
    list1sqr.sort()

    print(list2)
    print(list1sqr)
    
#     for x in list1:
#         if x < 0:
#             x * -1
    
    if list2==list1sqr:
        return True
    else:
        return False
