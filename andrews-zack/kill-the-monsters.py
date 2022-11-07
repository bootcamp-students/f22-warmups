# divide monsters by 3
# multiply that number by monster damage
# subtract that number from health
# if health is less than 0 return given statement


def kill_monsters(h, m, d):
    hits = 0
    if m%3 == 0:
        hits = (m//3)-1
    else:
        hits = m//3
    hurted = hits * d
    helth = h - hurted
    if h - hurted <= 0:
        return "hero died"
    else:
        return f"hits: {hits}, damage: {hurted}, health: {helth}"
