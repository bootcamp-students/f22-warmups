def kill_monsters(health, monsters, damage):
    hits = (monsters - 1) // 3
    health = health - damage * hits

    if health > 0:
        return f"hits: {hits}, damage: {damage * hits}, health: {health}"
    elif health <= 0:
        return "hero died"
