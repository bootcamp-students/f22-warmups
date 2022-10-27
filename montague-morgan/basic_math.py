# replace minus and plus with - +
# 

def calculate(s):
    s = s.replace('plus', '+')
    s = s.replace('minus', '-')
   
    # your code here
    return str(eval(s))
