def rot13(message):
    alpha_set = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return_string = ""
    for letter in message:
        print ("Letter: ", letter)
        if letter.isalpha():
            # convert to upper case
            find_letter = letter.upper()
            position = alpha_set.index(find_letter)-1
            print("Position: ", position)
            if position + 13 < 25:
                print("No shift required. Replacement index: ", position+13+1, " Replacement letter is: ", alpha_set[position+13+1])
                if letter.isupper():
                    return_string = return_string + (alpha_set[position+13+1])
                else:
                    return_string = return_string + (alpha_set[position+13+1]).lower()
            else:
                print("Shift necessary. Distance to end: ", 25-position-1)
                distance_to_end = 25 - position - 1
                count_from_start = 13 - distance_to_end - 1
                print("Count from start: ", count_from_start, " Replacement letter is:", alpha_set[count_from_start])
                if letter.isupper():
                    return_string = return_string + (alpha_set[count_from_start])
                else:
                    return_string = return_string + (alpha_set[count_from_start]).lower()
        else:
            return_string = return_string + (letter)
    return return_string
