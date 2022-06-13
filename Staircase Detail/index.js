
const stairCase = (n) => {
    let stair = ""
    for (let i = 1; i <= n; i++) {
        for (let k = (n - i); k > 0; k--) {
            stair += " "
        }
        for (let j = 0; j < i; j++) {
            stair += "#"
        }
        stair += "\n"
    }

    console.log(stair)
}

stairCase(7)