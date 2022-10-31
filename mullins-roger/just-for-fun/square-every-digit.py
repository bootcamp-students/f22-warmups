def square_digits(num):
    str_num = str(num)
    return_string = ""
    for x in str_num:
        return_string = return_string + str(int(x)**2)
    return int(return_string)
