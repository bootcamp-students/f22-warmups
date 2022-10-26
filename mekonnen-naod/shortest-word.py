def find_short(s):

words = s.split(' ')
words.sort(key=len)
    return len(words[0])
    
