import math
def comp(array1, array2):
    # 
    # Read each element of array1
    # Compare to each element of array2:
    #   if el_1 = (el_2*el_2) OR (el_1 = el_2//el_2) then move on to next element of array2
    #   else return false

    if array1 is None:
        return False
    
    if array2 is None:
        return False
    print(array1, array2)
    flag = False
    results = []
    #print("Checking ", array2)
    for element2 in array2:
        count = 0
        print("Iteration ", count)
        print("Checking ", element2, " (Looking for ", math.sqrt(element2), ")")
        
        for element1 in array1:
            
            print("   Against: ", element1, " squared which is ", element1*element1)
            
            if element2 == (element1*element1):
                print("FLAGGED.")
                flag = True
                array1[count] = 0
                print("New array1: ", array1)
                break
            else:
                flag = False
            count = count + 1

                
        if flag == False:        
            print("NUMBER NOT FOUND")
                
        results.append(flag)
     
    print(results)
    if False in results: 
        return False
    else:
        return True
