def good_vs_evil(good, evil):
    good_num = []
    evil_num = []
    good = good.split(' ')
    for x in good:
        good_num.append(int(x))
    hob = good_num[0]*1  
    hum = good_num[1]*2
    elv = good_num[2]*3    
    dwa = good_num[3]*3
    eag = good_num[4]*4
    gwiz= good_num[5]*10
    good = hob+hum+elv+dwa+eag+gwiz
    evil = evil.split(' ')
    for x in evil:
        evil_num.append(int(x)) 
    orc= evil_num[0]*1
    men = evil_num[1]*2    
    warg = evil_num[2]*2
    gob = evil_num[3]*2
    uruk = evil_num[4]*3
    troll = evil_num[5]*5
    ewiz= evil_num[6]*10
    evil = orc+men+warg+gob+uruk+troll+ewiz
    if good == evil:
        return "Battle Result: No victor on this battle field"
    elif good>evil:
        return "Battle Result: Good triumphs over Evil"
    else:
        return "Battle Result: Evil eradicates all trace of Good"
