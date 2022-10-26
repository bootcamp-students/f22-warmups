def find_short(s):
    new_list = s.split()
    short = len(new_list[0])
    for x in new_list:
        if short > len(x):
            short = len(x)
    return short
