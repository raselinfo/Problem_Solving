const plusMinus = (arr) => {
    const N = arr.length
    const { positiveCount, negativeCount, zeroCount } = arr.reduce((acc, number) => {
        if (number > 0) {
            acc.positiveCount += 1
        } else if (number < 0) {
            acc.negativeCount += 1
        }
        else if (number === 0) {
            acc.zeroCount += 1
        }
        return acc
    }, {
        positiveCount: 0,
        negativeCount: 0,
        zeroCount: 0
    })

    console.log((positiveCount / N).toFixed(6))
    console.log((negativeCount / N).toFixed(6))
    console.log((zeroCount / N).toFixed(6))

}

console.log(plusMinus([-4, 3, -9, 0, 4, 1]))