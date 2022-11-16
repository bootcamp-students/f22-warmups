import math
def comp(list1, list2):
    list2sqrt = []
    print(list1)
    if list2 == None or list1 == None:
        return False
    else:
        for x in list1:
            list2sqrt.append(x*x)
    list2.sort()
    list2sqrt.sort()
    print(list1)
    print(list2sqrt)
    if list2sqrt == list2:
        return True
    else:
        return False
    
