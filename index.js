// function name_of_the_function(/** Input something  */) {
//     // Function body
//     // any valid js code
//     // return a result
// }

// function test(wheat, rice) {

//     return `${wheat} ${rice}`
// }

// console.log(test("5kg", '6kg'))


/**
 * * Name: Human_Lifecycle
 * * Param: human_name
 * * :human_name, awake from sleep
 * * :human_name, go to washroom
 * * :human_name, take breakfast
 * * :human_name, go to school/college/office
 * * :human_name, Return from office
 * * :human_name, Take dinner
 * * :human_name", Go to sleep
 */


// Call Human_Lifecycle for 'Abu Musa'
// Call Human_Lifecycle for 'Easin Islam'
// Call Human_Lifecycle for 'Saiful Islam'
// Call Human_Lifecycle for 'Akib Ahmed'
// Call Human_Lifecycle for 'Alamin Mir'



//  * Function: Sleep
//     * Param: name
//         * Definition: How to sleep
//             * /

function sleep(name) {
    console.log(`${name} is sleeping`)
}

/**
 * Function: Awake
 * Param: name
 * Definition: How to awake
 */

function awake(name) {
    console.log(`${name} is sleeping`)
}

/**
 * Function: Eat
 * Param: name
 * Param: Time
 * Definition: How to eat
 */

function eat(name) {
    console.log(`${name} is eating`)
}


/**
 * Function: Walk
 * Param: name
 * Param: Destination
 * Definition: How to walk
 */

function walk(name, destination) {
    console.log(`${name} is walking to ${destination}`)
}

/**
 * Function: Study
 * Param: name
 * Definition: How to study
 */

function study(name) {
    console.log(`${name} is studying`)
}

/**
 * Function: Work
 * Param: name
 * Definition: How to work
 */
function work(name) {
    console.log(`${name} is working`)
}

/**
 * Function: Job_Holder_Lifecycle
 * Param: name
 * Definition:
 * - Awake -> name
 * - Eat -> name, 'breakfast'
 * - Walk -> name, 'office'
 * - Work -> name
 * - Eat -> name, 'lunch'
 * - Walk -> name, 'home'
 * - Eat -> name, 'dinner'
 * - Sleep -> name
 */

// function Job_Holder_Lifecycle(name) {
//     awake(name)
//     eat(name)
//     walk(name, "Office")
//     work(name)
//     eat(name)
//     sleep(name)

// }
// Job_Holder_Lifecycle("Rasel")

/**
 * Function: Student Lifecycle
 * Param: name
 * Definition:
 * - Awake -> name
 * - Eat -> name, 'breakfast'
 * - Study -> name
 * - Eat -> name, 'lunch'
 * - Study -> name
 * - Eat -> name, 'dinner'
 * - Sleep -> name
 */

function Students_Lifecycle(name) {
    awake(name)
    eat(name)
    study(name)
    eat(name)
    study(name)
    eat(name)
    sleep(name)
}
Students_Lifecycle("Rabina")
// Students_Lifecycle -> 'Faruk'
// Students_Lifecycle -> 'Elias'
// Students_Lifecycle -> 'Faisal'


// Job_Holder_Lifecycle -> 'Musa'
// Job_Holder_Lifecycle -> 'Akib'
// Job_Holder_Lifecycle -> 'Bipon'




// function test(name) {
//     // fafaf
// }

// test("name") //invoke

// function sum(num1 = 0, num2 = 0) {
//     // if (!num1) {
//     //     num1 = 0
//     // }
//     // if (!num2) {
//     //     num2 = 0
//     // }
//     return num1 + num2
// }

// let result = sum(5)
// console.log(result)


//function :sum max number
// param: num1
// param: num2
// Description: (num1+num2)  + max(num1,num2)




// function sum_max_number(num1, num2) {
//     num1 ? num1 : num1 = 0;
//     num2 ? num2 : num2 = 0;
//     return (num1 + num2) + Math.max(num1, num2)
// }

// const result = sum_max_number(5, 8)
// console.log(result)



// Todo: 
// Function: get_large_number
// param: num1=sum(num1+num2), num2=sub(num1,num2)
function get_large_number(num1, num2) {
    return Math.max(num1, num2)
}




// Function : sum
// parm: num1,num2
// definition: return the sum of tow values

function sum(num1, num2) {
    return num1 + num2
}

// Function : sub
// parm: num1=multiplication(num1,num2),num2
// definition: Subtraction of tow values
function sub(num1, num2) {
    return num1 - num2
}

// Function: multiplication
// param: num1, num2 = sum(num1, num2)
// definition: the multiplication of two values
function multiplication(num1, num2) {
    return num1 * num2
}


const result = get_large_number(
    sum(5, 5),
    sub(
        multiplication(5, sum(5,5)), 8
    ))


console.log(result)