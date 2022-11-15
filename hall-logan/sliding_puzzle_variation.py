def is_solved(board):
    sorted_array_check = []
    base_array = []
    for x in board:
        for y in x:
            sorted_array_check.append(y)
            base_array.append(y)
    sorted_array_check = sorted(sorted_array_check)
    if sorted_array_check == base_array:
        return True
    else:
        return False
