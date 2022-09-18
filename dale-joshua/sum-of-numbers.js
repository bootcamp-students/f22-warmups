function getSum(a, b) {

    // find lowest integer
    let min = Math.min(a, b),

        // find highest integer
        max = Math.max(a, b)

    // highest - lowest integer + 1 * highest + lowest / 2
    return (max - min + 1) * (max + min) / 2
}
// had a lot of trouble with this one. I ended up looking at a bunch of different solutions so I could understand
// whats going on and I do understand it but I don know how I would have found a solution on my own.
