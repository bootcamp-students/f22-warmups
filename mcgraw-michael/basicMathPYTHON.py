def calculate(s):
    s = s.replace('plus', '+')
    s = s.replace('minus', '-')
    return str(eval(s))
