def is_solved(board):

    list = []
    does_she_work = False
    checker = 0
    i = 1
    for arr in board:
        for number in arr:
            list.append(number)
    print(list)
    for num in range(i, len(list)):
        if(list[i] < list[i - 1]):
            checker = 1
        i += 1
        if (not checker) :
            does_she_work = True
        else :
            does_she_work = False
    return does_she_work
#        
