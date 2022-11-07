def kill_monsters(health, monsters, damage):
    if monsters % 3 == 0:
        hits = monsters // 3
        hits = hits - 1
    else:
        hits = monsters // 3 
    dmg = hits * damage
    hth = health - dmg
    if hth <= 0:
        return 'hero died'
    return f"hits: {hits}, damage: {dmg}, health: {hth}" # TODO
