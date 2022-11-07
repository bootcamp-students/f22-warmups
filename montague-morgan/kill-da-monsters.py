import math
def kill_monsters(health, monsters, damage):
    monsters = math.floor((monsters -1)/3)
    hits = monsters
    damage = monsters*damage
    health = health - damage
    if health <=0:
        return 'hero died'
    else:
        return "hits: " + str(hits) +", damage: " + str(damage) + ", health: " + str(health)
