def valid_solution(board):
    offset = 0
    for index in range(0,9):
        print(board[index])
    print('')
    check_array = []
    ## Checking rows
    for row in range(0, 9):
        for col in range(0,9):
            if board[row][col] in check_array:
                print('This is the trigger')
                return False
            if board[row][col + offset] == 0:
                    return False
            check_array.append(board[row][col])
        check_array = []
    ## Checking col
    check_array = []
    for col in range(0,9):
        for row in range(0,9):
            if board[row][col] in check_array:
                print('No I aam')
                return False
            if board[row][col + offset] == 0:
                    return False
            check_array.append(board[row][col])
        check_array = []
    ## Checking 3x3
    check_array = []
    offset = 0
    for grid in range(0,3):
        for col in range(0,3):
            for row in range(0,3):
                if board[row][col + offset] in check_array:
                    print('TChutr')
                    return False
                if board[row][col + offset] == 0:
                    return False
                check_array.append(board[row][col + offset])
        offset += 3
        check_array = []
    check_array = []
    offset = 0
    for grid in range(0,3):
        for col in range(0,3):
            for row in range(3,6):
                if board[row][col + offset] in check_array:
                    print('Thistr')
                    return False
                if board[row][col + offset] == 0:
                    return False
                check_array.append(board[row][col + offset])
        offset += 3
        check_array = []
    offset = 0
    check_array = []   
    for grid in range(0,3):
        for col in range(0,3):
             for row in range(7,9):
                if board[row][col + offset] in check_array:
                    print('This is tr')
                    return False
                if board[row][col + offset] == 0:
                    return False
                check_array.append(board[row][col + offset])
        offset += 3
        check_array = []
    return True
