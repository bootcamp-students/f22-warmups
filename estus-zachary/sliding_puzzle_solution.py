def is_solved(board):
    check_num = 0
    length = len(board)
    index = 0
    while index < length:
        for num in board[index]:
            if(check_num == num):
                check_num += 1
            else:
                return False
        index += 1
    return True
