


function diagonalDifference(arr) {
    let row = 0; let col = 0;
    let leftToRight = 0;
    let rightToLeft = 0;
    let leftRow = 2
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i]
        for (let j = 0; j < item.length; j++) {
            if (row === i) {
                if (col === i) {
                    leftToRight += item[col]
                    col += 1
                }
                row += 1
            }
        }
        for (let k = (item.length - 1); k >= 0; k--) {
            if (leftRow === k) {
                rightToLeft += item[k]
            }
        }
        leftRow -= 1
    }
    return Math.abs(leftToRight - rightToLeft)
}


// function diagonalDifference(arr) {
//     const result = arr.reduce((acc, item, index) => {
//         console.log(index)
//     }, 0)
// }


const arr = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, 12]
]

const result = diagonalDifference(arr)
console.log(result)