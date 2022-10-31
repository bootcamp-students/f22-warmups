# use conditional: if year < 1000 return year // 100 + 1 
# if year >= 1000 and year % 100 == 0, return year/ 100
# else return year // 100 + 1

def century(year):
    if year < 1000:
        return year // 100 + 1
    elif year >= 1000 and year % 100 == 0:
        return year / 100
    else:
        return year // 100 + 1
