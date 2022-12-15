def valid_solution(board):
  # check if board is 9x9
  if len(board) != 9 or any(len(row) != 9 for row in board):
    return False

  # check if board contains only numbers from 0 to 9
  for row in board:
    for cell in row:
      if not (0 <= cell <= 9):
        return False

  # check if board does not contain any zeroes
  if any(0 in row for row in board):
    return False

  # check if all rows have unique numbers
  for row in board:
    if len(set(row)) != 9:
      return False

  # check if all columns have unique numbers
  for col in range(9):
    if len(set(board[row][col] for row in range(9))) != 9:
      return False

  # check if all 3x3 sub-grids have unique numbers
  for i in range(0, 9, 3):
    for j in range(0, 9, 3):
      subgrid = [board[r][c] for r in range(i, i+3) for c in range(j, j+3)]
      if len(set(subgrid)) != 9:
        return False

  # if all checks pass, return True
  return True
