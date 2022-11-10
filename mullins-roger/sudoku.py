import numpy as np
def valid_solution(board):
    
    for x in board:
        print(x)
    print('-----------')
    
    for x in board:
        if 0 in x:
            return False

    def all_unique(test_list):
        if len(test_list) > len(set(test_list)):
            return False
        return True
    
    
    for x in board:
        if not (all_unique(x)):
            return False
        
    columns = np.column_stack(board)
    
    #print(columns)
    
    for x in columns:
        if not (all_unique(x)):
            return False
    rowcount = 0
    colcount = 0
    square = []
    
    while rowcount < 3:
        colcount = 0
        while colcount <3:
            square.append(board[rowcount][colcount])
            colcount = colcount + 1
        rowcount = rowcount + 1
    
    if not (all_unique(square)):
        return False
    
    
    rowcount = 0
    colcount = 3
    square = []
    
    while rowcount < 3:
        colcount = 3
        while colcount <6:
            square.append(board[rowcount][colcount])
            colcount = colcount + 1
        rowcount = rowcount + 1
    
   # print(square)
    if not (all_unique(square)):
        return False

    
    rowcount = 0
    colcount = 6
    square = []
    
    while rowcount < 3:
        colcount = 6
        while colcount < 9:
            square.append(board[rowcount][colcount])
            colcount = colcount + 1
        rowcount = rowcount + 1
    
    #print(square)
    if not (all_unique(square)):
        return False
    
    #----------------------------------------------
    
    rowcount = 3
    colcount = 0
    square = []
    
    while rowcount < 6:
        colcount = 0
        while colcount <3:
            square.append(board[rowcount][colcount])
            colcount = colcount + 1
        rowcount = rowcount + 1
    print(square) 
    if not (all_unique(square)):
        return False
    
    
    rowcount = 3
    colcount = 3
    square = []
    
    while rowcount < 6:
        colcount = 3
        while colcount <6:
            square.append(board[rowcount][colcount])
            colcount = colcount + 1
        rowcount = rowcount + 1
    
    print(square)
    if not (all_unique(square)):
        return False

    
    rowcount = 3
    colcount = 6
    square = []
    
    while rowcount < 6:
        colcount = 6
        while colcount < 9:
            square.append(board[rowcount][colcount])
            colcount = colcount + 1
        rowcount = rowcount + 1
    
    print(square)
    if not (all_unique(square)):
        return False
    
    #----------------------------------------------
    
    rowcount = 6
    colcount = 0
    square = []
    
    while rowcount < 9:
        colcount = 0
        while colcount <3:
            square.append(board[rowcount][colcount])
            colcount = colcount + 1
        rowcount = rowcount + 1
    print(square) 
    if not (all_unique(square)):
        return False
    
    
    rowcount = 6
    colcount = 3
    square = []
    
    while rowcount < 9:
        colcount = 3
        while colcount <6:
            square.append(board[rowcount][colcount])
            colcount = colcount + 1
        rowcount = rowcount + 1
    
    print(square)
    if not (all_unique(square)):
        return False

    
    rowcount = 6
    colcount = 6
    square = []
    
    while rowcount < 9:
        colcount = 6
        while colcount < 9:
            square.append(board[rowcount][colcount])
            colcount = colcount + 1
        rowcount = rowcount + 1
    
    print(square)
    if not (all_unique(square)):
        return False
    
    return True
