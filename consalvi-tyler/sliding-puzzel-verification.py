def is_solved(board):
    
    check_board=[]
    
    for x in range(len(board)):
        this_row = sorted(board[x])
        check_board.append(this_row)
        if this_row == board[x]: 
            continue
        else: return False
    
    check_board = sorted(check_board)
    
    if board != check_board:
        return False

    return True
