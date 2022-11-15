def is_solved(board):
    print(board)
    og_list = []
    sorted_list = []
    for x in board:
        for y in x:
            og_list.append(y)
            sorted_list.append(y)
    sorted_list = sorted(sorted_list)
    if og_list == sorted_list:
        return True
    else:
        return False
        
    
