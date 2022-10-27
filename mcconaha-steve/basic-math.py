def calculate(s):
    newString = s.replace("plus","+").replace("minus","-")
    return str(eval(newString))
