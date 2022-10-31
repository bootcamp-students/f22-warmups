def are_you_playing_banjo(name):
    # Implement me!
    ret_string = ""
    if name[0] == "R" or name[0] == "r":
        ret_string = name + " plays banjo"
    else:
        ret_string = name + " does not play banjo"
    return ret_string
