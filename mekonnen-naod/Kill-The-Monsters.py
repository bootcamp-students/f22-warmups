import math

def kill_monsters(health, monsters, damage):
    hits = (monsters - 1) //3
#     print(hits)
    damage = hits * damage
#     print(damage)
    health = health - damage
#     print(health)
    if health > 0:
        return (f"hits: {hits}, damage: {damage}, health: {health}")

    if health <=0:
          return('hero died')
 
