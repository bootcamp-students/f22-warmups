def valid_solution(board):
    
    def checker(check):
        if sum(check) == 45:
            return True
        else: return False
        
    square = []
    row_count = 0
    for x in board:
        check = set(board[row_count])
        if checker(check):
            row_count += 1
        else: return False
    
    col_count = 0
    
    for x in board[0]:
        col = []
        row_count = 0
        for i in board:
            this_row = board[row_count]
            col.append(this_row[col_count])
            row_count += 1
        check = set(col)
        if checker(check):
            col_count += 1
        else: return False
    
    square = []
    
    for next in range(0,9,3):
        for sq in range(0,9,3):
            print(sq)
            row_count = next
            for row in range(3):
                col_count = sq
                for col in range(3):
                    square.append(board[row_count][col_count])
                    col_count += 1
                row_count += 1
            print(square)
            if checker(square):
                square = []
                continue
            else:
                return False
    
    return True
