def kill_monsters(h, m, d):
    hits = 0
    if m % 3 == 0:
        hits = m//3-1
    else: 
        hits = m//3
    damage = hits * d
    health = h - damage
    
    if health <= 0:
        return "hero died"
    
    return f"hits: {hits}, damage: {damage}, health: {health}"
