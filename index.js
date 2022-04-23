// let arr = [2, 7, 15, 10, 12, 19, 45, 23, 56, 5, 13]
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
let arr = [2, 7, 15, 10, 12, 19, 45, 23, 56, 5, 13]
let sum = 0
let indexArray = []
function getNine(number) {
    for (let i = 0; i < arr.length; i++) {
        if (sum > number) {
            return { sum, message: "Targeted Value Not found!" }
        }
        else if (sum !== number) {
            indexArray.push(i)
            sum += arr[i]
        } 
    }
    return { sum, index: indexArray }
}
console.log(getNine(10))