// // Function Literal
// // function test() {
// //     return true
// // }

// // treat as a value
// // we can change the value of an function

// /**
//  *
//  * @constraint
//  * 1. we can't access the value outer the scope
//  */
// let test = function test() {
//     return true
// }
// console.log(test)

// // test = 5

function test() {
    return true
}


// const newTestFunc = test
// console.log(newTestFunc.toString())

// const arr = [test, newTestFunc]
// let obj = { fn: test }
// console.log(arr[1].toString())
// console.log(obj.fn.toString())


function callOthersFunc(test) {
    return test
}

console.log(callOthersFunc(test).toString())