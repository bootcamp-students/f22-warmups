def is_solved(board):
    print(board)
    rows = len(board)
    for i in range(rows):
        for x in range(rows-1):
            if board[i][x] < board[i][x+1] and board[0][0] < board[1][1]:
                continue
            else:
                return False
    return True
