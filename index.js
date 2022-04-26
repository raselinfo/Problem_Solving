
function getDiagonalSum(numbers) {
    let result = numbers.reduce((acc, curr, index) => {
        let leftToRight = diagonalSum("leftToRight", index, curr)
        let rightToLeft = diagonalSum("rightToLeft", index, curr)
        acc += (leftToRight + rightToLeft)
        return acc
    }, 0)

    return result
}


function diagonalSum(type, index, curr) {
    if (index === 0) {
        if (type === 'leftToRight') {
            return curr[0]
        } else {
            return curr[2]
        }
    } else if (index === 1) {
        if (type === "leftToRight") {
            return curr[1]
        } else {
            return curr[1]
        }
    } else {
        if (type === "leftToRight") {
            return curr[2]
        } else {
            return curr[0]
        }
    }
}


const numbers = [
    [3, 2, 3],
    [3, 4, 5],
    [5, 6, 7]
];

console.time('time')
let result = getDiagonalSum(numbers)
console.timeEnd('time');

