// array = [1,3]
// target = 2


function getPosition(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i]
        if (item === target) {
            return i
        } else {
            if ((item < target) && (target < (arr[i + 1] == undefined ? target + 1 : arr[i + 1]))) {
                return i + 1
            }
        }

    }
}
const arr = [1, 3, 7]
const target = 8
console.log(getPosition(arr, target))