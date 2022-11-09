def parse(data):
#     # loop through the string
#     if i then =+ increament
#     if d then -+ decrement
#     if s then ** square
#     if o then push to array
    current_val = 0
    return_arr = []
    for letter in data:
#         print(letter)
        if letter == 'i':
            current_val += 1
        if letter == 'd':
            current_val -= 1
        if letter == 's':
            current_val = current_val ** 2
        if letter == 'o':
            return_arr.append(current_val)
    return return_arr
