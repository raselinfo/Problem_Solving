let arr = [2, 7, 11, 15]
// let currentIndex;
// let lastIndex;
// function getResultNine() {
//     for (let i = 0; i < arr.length; i++) {
//         let result = arr[i] + arr[i - 1]
//         if (result === 9) {
//             currentIndex = i
//             lastIndex = i - 1
//         }
//     }

//     return [lastIndex, currentIndex]
// }

// console.log(getResultNine())

let sum = 0
let indexArray = []
function getNine() {
    for (let i = 0; i < arr.length; i++) {
        if (sum !== 9) {
            indexArray.push(i)
            sum += arr[i]
        }
    }
    return { sum, index: indexArray }
}
console.log(getNine())
