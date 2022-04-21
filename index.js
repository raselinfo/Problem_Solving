function aVeryBigSum(ar) {
    if (ar.length < 0 || ar.length > 10) {
        return false
    }

    let sum = 0
    ar.forEach(num => {
        if (num < 0 || num > Math.pow(10, 10)) {
            return false
        }
        sum += num
    })
    return sum
}

console.log(aVeryBigSum([0]))