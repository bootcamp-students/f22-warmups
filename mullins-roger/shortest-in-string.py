def find_short(s):
    # your code here
    in_array = s.split()
    l = in_array[0]
    for word in in_array:
        print(word, len(word))
        if len(word) < len(l):
            l = word
    return len(l) # l: shortest word length
