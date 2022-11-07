import math

def kill_monsters(health, monsters, damage):
    hit = 0
    damage_inc = 0
    for turn in range(math.ceil(monsters/3)):
        if health > 0:
            monsters -= 3
            print('this is the remaining monsters ' + str(monsters))
            if monsters > 0:
                hit += 1
                print('this is the number of hits ' + str(hit))
                damage_inc += damage
                print('this is how much damage is incurred ' + str(damage))
                health = health - damage
            if monsters <= 0:
                return f'hits: {hit}, damage: {damage_inc}, health: {health}'
        else:
            return "hero died" # TODO
