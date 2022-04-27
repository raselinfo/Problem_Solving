const uuid = require("./uuid")

const students = {
    '7482484e-e695-4c4d-97b4-f7e9ef06c3bc': {
        id: '7482484e-e695-4c4d-97b4-f7e9ef06c3bc',
        name: 'Rasel',
        email: 'rasel@gmail.cjom'
    },
    '09065497-6d33-4ef9-8adb-1dadb5fd98fe': {
        id: '09065497-6d33-4ef9-8adb-1dadb5fd98fe',
        name: 'Rabina',
        email: 'rabina@gmail.cjom'
    },
    '6903bbe4-486e-46c7-bc31-54aa596e1a53': {
        id: '6903bbe4-486e-46c7-bc31-54aa596e1a53',
        name: 'Sakib',
        email: 'Sakib@gmail.cjom'
    }
}

// const id = '6903bbe4-486e-46c7-bc31-54aa596e1a53'
// const index = students.findIndex(student => student.id === id)
// students[index].name = "Sakiba"
// students.splice(index, 1)

// students.push({
//     id: uuid(),
//     name: "New Student",
//     email: "new@gmail.com"
// })

students['7482484e-e695-4c4d-97b4-f7e9ef06c34545'] = {
    id: '7482484e-e695-4c4d-97b4-f7e9ef06c34545',
    name: "New Students",
    email: "new@gmail.com"
}

// [+]Read
// [+]Update
// [+]Delete
// [+]create
// for (let value of Object.keys(students)){
//    console.log(value)
// }

const result = Object.values(students).reduce((acc, student) => {
    if(student.name[0]==='R'){
        acc.push(student)
    }
    return acc
}, [])
console.log(result)