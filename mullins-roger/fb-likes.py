def likes(names):
    # your code here
    if len(names) == 0:
        return ("no one likes this")
    if len(names) == 1:
        return (names[0] + " likes this")
    if len(names) == 2:
        return (names[0] + " and " + names[1] + " like this")
    if len(names) == 3:
        return (names[0] + ", " + names[1] + " and " + names[2] + " like this")
    if len(names) >= 4:
        count = len(names) - 2
        if count == 1:
            o = " other likes"
        elif count > 1:
            o = " others like"
        return (names[0] + ", " + names[1] + " and " + str(count) + o + " this")
