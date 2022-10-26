# given string of words, never will be empty
# need so split the words by split
# make the key, with length
# sort the list of words by length using the key
# return length of word at position 0

def length(e):
    return len(e)

def find_short(s):
    x = s.split(' ')
    x.sort(key=length)
    return len(x[0])

    
#     pass l # l: shortest word length
