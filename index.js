const toggle = document.querySelector("#toggle");
const body = document.querySelector("body");
// let switchMood = "light"
toggle.addEventListener("click", () => {
    if (body.className === "dark") {
        body.className = "light"
    } else {
        body.className = "dark"
    }
    // console.log(switchMood)
    // if (switchMood = "light") {
    //     body.style.backgroundColor = "black"
    //     switchMood = "dark"
    //     console.log("I am Dark")
    // } else {
    //     body.style.backgroundColor = "white"
    //     switchMood = "light"
    //     console.log("I am Light")
    // }

})