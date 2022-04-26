const names = [
    'Ayman',
    'Abu Rayhan',
    'Anik',
    'Elias Emon',
    'Engr. Sabbir',
    'Fahim Faisal',
    'Feroz Khan',
    'Habib',
    'HM Azizul',
    'Hridoy Saha',
    'Jahid Hassan',
    'Johir',
    'Md Al-Amin',
    'Md Arafatul',
    'Md Ashraful',
    'Parvez',
];

// const namesGroup = {
// 	A: ['Ayman', 'Abu Rayhan', 'Anik'],
// 	E: ['Elias Emon', 'Engr. Sabbir'],
// 	F: ['Fahim Faisal', 'Feroz Khan'],
// };

function getPhoneBook(names) {
    let result = names.reduce((acc, item) => {
        if (item[0] in acc) {
            acc[item[0]].push(item)
        } else {
            acc[item[0]] = [item]
        }

        return acc
    }, {})

    return result
}
console.time("time")
getPhoneBook(names)
console.timeEnd("time")
