def sq_in_rect(lng, wdth):
    if lng == wdth:
        return None
    values = [lng, wdth]
    ans = []
    while values[0] > 0 and values[1] > 0:
        values.sort()
        ans.append(values[0])
        values[1] -= values[0]

    return ans
