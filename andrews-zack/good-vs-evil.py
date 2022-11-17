def good_vs_evil(good, evil):
    good = good.split()
    evil = evil.split()
    good_guys = [1,2,3,3,4,10]
    bad_guys = [1,2,2,2,3,5,10]
    i=0
    bois = 0
    for x in good:
        bois += (int(x)*good_guys[i])
        i+=1
    i=0
    lads=0
    for z in evil:
        lads += (int(z)*bad_guys[i])
        i+=1
    if bois > lads:
        return 'Battle Result: Good triumphs over Evil'
    if lads > bois:
        return 'Battle Result: Evil eradicates all trace of Good'
    if bois == lads:
        return 'Battle Result: No victor on this battle field'
    return
