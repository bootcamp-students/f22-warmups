def is_solved(board):
    n = (len(board))
    test_array = []
    for row in board:
        test_array = test_array + row
    
    flag = 0
    i = 1
    while i< len(test_array):
        if(test_array[i] < test_array[i-1]):
            flag = 1
        i+=1
    
    if not flag:
        return True
    else:
        return False
