// function processData(input) {
//     var lines = input.split("\n");
//     //[ '3', '11 2 4', '4 5 6', '10 8 -12' ]

//     var N = parseInt(lines[0]);
//     //3
//     var ans = 0;

//     for (i = 1; i <= N; i++) {
//         var line = lines[i].split(" ");
//         // [ '11', '2', '4' ]
//         // ['4', '5', '6']
//         // ['10', '8', '-12']
//         // console.log(line[i - 1], line[N - i])
//         // 10-(-12)
//         const result = (parseInt(line[i - 1]) - parseInt(line[N - i]))
//         ans = ans + result;
//     }
//     // console.log(Math.abs(ans));
// }

const processData = (arr) => {
    const row = arr.length
    return Math.abs(arr.reduce((acc, item, index) => {
        return acc += parseInt(item[index]) - parseInt(item[row - (index + 1)])
    }, 0))
}
const arr = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
]
const result = processData(arr)
console.log(result)


