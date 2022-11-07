def kill_monsters(health, monsters, damage):
#     1 punch kills a monster
# after 3 punches, OPM gets hit with damage once
# health = # of hits
# if health is <= zero, return 'hero died'
# for each multiple of 3, hits++
    hits = 0
    for i in range(1, monsters):
        print('i: ',i)
        if i % 3 == 0:
            hits += 1
            print('hits: ',hits)
    damage_done = hits*damage
    health -= damage_done
    if health <= 0:
        return 'hero died'
        
    return f'hits: {hits}, damage: {damage_done}, health: {health}'
