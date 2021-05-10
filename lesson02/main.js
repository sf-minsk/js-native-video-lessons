let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },{
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

console.log(students.map(st => ({...st, age: st.age + 1})))

// function map(array, func) {
//     const newArray = []
//     for (let i = 0; i < array.length; i++){
//         newArray[i] = func(array[i])
//     }
//     return newArray
// }

function map(array, func) {
    const newArr = []
    // array.forEach((st) => {
    //     newArr.push(func(st))
    // })
    array.forEach((st, i) => {
        newArr[i] = func(st)
    })
    return newArr
}


console.log(map(students, st => ({...st, age: st.age +1})))





function filter(array, func) {
    const newArray = []
    for (let i = 0; i < array.length; i++){
        if (func(array[i]) === false)
            newArray.push(array[i])
        }
        return newArray
    }


function getNotMarriedStudents(st) {
    return !st.isMarried
}


console.log(filter(students, getNotMarriedStudents(students)))


function find(array, func) {
    for (let i = 0; i < array.length; i++) {
        if( func(array[i]) === true) {
            return array[i]
        }
    }
}










