function scramble(str1, str2) {

    var counter = {},
        keys = 0;

    for (let i = 0; i < str2.length; i++) {
        if (!counter[str2[i]]) {
            counter[str2[i]] = 0;
            keys++;
        }
        counter[str2[i]]++;
    }

    for (let i = 0; i < str1.length; i++) {
        if (!counter[str1[i]]) continue;
        if (!--counter[str1[i]] && !--keys) return true;
    }
    return false;
}
