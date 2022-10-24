# for n = 13
# 13 // 2 = 6
# n // 2 + 1 = mid point
# Pass
# 1     X%%%%%%%%%%%X 0 + 11 spaces (n - 2)
# 2     %X%%%%%%%%%X%  1 + 9 spaces (n - 4)
# 3     %%X%%%%%%%X%%  2 + 7 spaces (n - 6)
# 4     %%%X%%%%%X%%%  3 + 5 spaces (n - 8)
# 5     %%%%X%%%X%%%%  4 + 3 spaces (n - 10)
# 6     %%%%%X%X%%%%%  5 + 1 space  (n - 12)
# 7     %%%%%%X%%%%%%  6 + 0 space < mid point
# 8 = 6...
# Loop 0 to n//2
# String = iterator*spaces + character + (n-2)*spaces + character + iterator*spaces + newline
# Middle = n//2*spaces + character + n//2*spaces + newline
# String = backwards iteration n//2 to 0

def x(n):
    # have fun ;)

    current_string = ""
    return_string = ""
    
    count = 0
    mid_spaces = n-2
    
    while count < n//2:
        current_string = (count*"□") + "■" + (mid_spaces*"□") + "■" + (count*"□") + "\n"
        return_string = return_string + current_string
        mid_spaces = mid_spaces - 2
        count = count + 1
        
    current_string = ((n//2)*"□") + "■" + ((n//2)*"□") + "\n"
    return_string = return_string + current_string
    
    count = (n//2)-1
    mid_spaces = 1
    
    while count >= 0:
        current_string = (count*"□") + "■" + (mid_spaces*"□") + "■" + (count*"□")
        if count != 0:
            current_string = current_string + "\n"
        return_string = return_string + current_string
        mid_spaces = mid_spaces + 2
        count = count - 1
    
    print (return_string)
    
    return return_string
