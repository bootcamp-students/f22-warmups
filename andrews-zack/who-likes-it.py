def likes(n):
    match len(n):
        case 0:
            return "no one likes this"
        case 1:
            return f"{n[0]} likes this"
        case 2:
            return f"{n[0]} and {n[1]} like this"
        case 3:
            return f"{n[0]}, {n[1]} and {n[2]} like this"
        case _:
            return f"{n[0]}, {n[1]} and {len(n)-2} others like this"
    pass
