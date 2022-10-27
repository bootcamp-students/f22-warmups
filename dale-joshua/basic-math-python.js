def calculate(s):
    s = s.replace('plus', '+')
    s = s.replace('minus', '-')
    final = eval(s)
    return str(final)
