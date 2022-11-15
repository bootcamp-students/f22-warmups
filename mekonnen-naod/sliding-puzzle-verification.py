def is_solved(board):
    
    array=[]
    sortedlist=[]
    for row in board:
            for col in row:
                array.append(col)
                sortedlist.append(col)
    if array == sorted(sortedlist):
        return True
    else:
        return False
