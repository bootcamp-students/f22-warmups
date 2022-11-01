def get_sum_of_digits(num):
    sum = 0
    digits = str(num)
    for x in digits:
        sum = sum + int(x)
    return sum
