def century(year):
    # Finish this :)
    print("Year in: ", year)
    test = year // 100
    print(year, " mod 100 = ", test)
    test2 = year % 100
    print(test2, " should be in range 0 - 100")
    if test2 >= 1 and test2 <= 100:
        print("Returning ", test+1)
        return test+1
    else:
        print("Returning ", test)
        return test
