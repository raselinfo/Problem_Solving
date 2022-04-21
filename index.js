function simpleArraySum(ar) {
    // Write your code here
    let n = ar.length
    let sum = 0
    for (let i = 0; i < n; i++) {
        let item = ar[i]
        sum += item
    }
    return sum
}

console.log(simpleArraySum([1,2,3]))