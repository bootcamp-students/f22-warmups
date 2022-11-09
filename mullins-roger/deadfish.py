def parse(data):
    # TODO: your code here
    i = 0
    return_array = []
    for ch in data:
        print("ch is: ", ch)
        print("i is: ", i)
        if ch == "i":
            i = i+1
        elif ch == "d":
            i = i-1
        elif ch == "s":
            i = i*i
        elif ch == "o":
            print("Appending.")
            return_array.append(i)
            print("return_array is now: ", return_array)
    return return_array
