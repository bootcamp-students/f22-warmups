# def kill_monsters(health, monsters, damage):
#     hit_count = 0
#     punch_count = 0
#     damage_count = 0
#     while(monsters > 0):
#         punch_count += 1
#         monsters -= 1
#         if(punch_count == 3 and monsters > 0):
#             hit_count += 1
#             punch_count = 0
#             health -= damage
#             damage_count += damage
#         if(health <= 0):
#             return 'hero died'
#     return "hits: " + str(hit_count) + ", damage: " + str(damage_count) + ", health: " + str(health

def kill_monsters(health, monsters, damage):
    hit_count = (monsters - 1) // 3
    damage *= hit_count
    health -= damage
    if(health <= 0):
        return 'hero died'
    else:
        return f'hits: {hit_count}, damage: {damage}, health: {health}'
