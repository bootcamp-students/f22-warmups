import string
def rot13(message):
# ORIGINAL THOUGHTS: the acii caused index problems
#     upper = string.ascii_uppercase
#     lower = string.ascii_lowercase
#     decoded = []
#     for letter in message:
#         if letter.isupper():
#             decoded.append(upper[upper.index(letter)])
#         else:
#             decoded.append(lower[lower.index(letter)])
    new_message = []
    x = "abcdefghijklmnopqrstuvwxyz"
    y = "nopqrstuvwxyzabcdefghijklm"
    for letter in message:
        if letter.islower():
            decode = letter.maketrans(x, y)
            new_message.append(letter.translate(decode))
        else:
            letter_low = letter.lower()
            decode = letter_low.maketrans(x, y)
            new_message.append(letter_low.translate(decode).upper())
    return(''.join(new_message))
