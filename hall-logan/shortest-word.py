# convert the string into an array
# then loop through the array
# append the length of each item into an array
# return the minimum of the array


def find_short(s):
    s = s.split(' ')
    array = []
    for x in s:
        array.append(len(x))
    return min(array)
