const arr = [null, 2, 3, null, false, 4, "", "test", 5, 6, 7]
let count = 0
for (let i = 0; i < arr.length; i++) {
    // for (let j = i; j < arr.length - 1; j++) {
    //     if (!arr[j] || typeof arr[j] !== "number") {
    //         // arr[j] = arr[j + 1]
    //         // arr[j + 1] = undefined

    //     }
    // }
    for (let j =0;j<arr.length;j++){
        if (!arr[i] || typeof arr[i] !== "number") {
            arr.splice(i, 1)
        }
    }

    // if (typeof arr[i] === "undefined") {
    //     count++
    // }
}
// arr.length = arr.length - count
console.log(arr)
