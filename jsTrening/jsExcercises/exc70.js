
var climbStairs = function(n) {
    let curr = 1
    let prev = 0

    for (let i = 1; i <= n; i++) {
        [curr, prev] = [prev + curr, curr]
    }

    return curr
}
