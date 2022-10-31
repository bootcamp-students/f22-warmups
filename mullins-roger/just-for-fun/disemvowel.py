def disemvowel(string_):
    ret_string=""
    ref_string="AaEeIiOoUu"
    for letter in ref_string:
        ret_string = string_.replace(letter, "")
        string_ = ret_string
        
    return ret_string
