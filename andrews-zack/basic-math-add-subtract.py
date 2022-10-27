#python

def calculate(s):
    ns = s.replace("plus", "+")
    ons = ns.replace("minus", "-")
    return str(eval(ons))
