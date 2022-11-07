def kill_monsters(health, monsters, damage):
    
    def battle(monsters, damage):
        hits_recd = 0
        damage_done = 0
        monsters_remaining = monsters
        while monsters_remaining > 3:
            print(f"Monsters remaining: {monsters_remaining}, hits_recd = {hits_recd}, damage_done = {damage_done}")
            monsters_remaining = monsters_remaining - 3
            hits_recd = hits_recd + 1
            damage_done = damage_done + damage
        print (f"Returning: hits_recd = {hits_recd}, damage_done = {damage_done}")
        return hits_recd, damage_done
    
    print(f"Incoming - health = {health}, monsters = {monsters}, damage = {damage}")
    hits, damage_done = battle(monsters, damage)
    if (health - damage_done) <= 0:
        return "hero died"
    return f"hits: {hits}, damage: {damage_done}, health: {health-damage_done}"
