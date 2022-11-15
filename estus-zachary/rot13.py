## Lower case ascii values  97 - 122
## Upper case ASCII values  65 - 90
def rot13(message):
    answer = ''
    ascii_value = 0
    for char in message:
        ascii_value = ord(char)
        print(ascii_value)
        if (97 <= ascii_value <= 122):
            print('hello')
            ascii_value += 13
            if(ascii_value >= 123):
                ascii_value = (ascii_value - 122) + 96
        if (65 <= ascii_value <= 90):
            print('Hiya')
            ascii_value += 13
            if(ascii_value >= 91):
                ascii_value = (ascii_value - 90) + 64
        print(ascii_value)
        answer += chr(ascii_value)        
    
    return answer
