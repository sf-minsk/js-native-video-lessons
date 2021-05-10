const array = [777,23,12,43,32,65,82,21,0,99]

// bubble sort
for (let j = 0; j < array.length - 1; j++){
    for (let i = 0; i < array.length - 1 - j; i++){
        if(array[i]>array[i + 1]) {
            [array[i], array[i + 1]] = [array[i + 1], array[i]]
        }
    }
}

console.log(array)

// method sort


const names = ['Bob','Alex','Roman','Donald','2021',2020,'кот','Владимир']
console.log(names.sort().reverse())

const numbers = [100,1,1000,345,22500,2020,14,4]
console.log(numbers.sort())

//sort => compareFunction => a
// a <= 0 - не переставляем
// a > 0 - переставляем

function comp(a,b) {   //по возрастанию
    if (a <= b){
        return -1
    } else {
        return 1
    }
}
//или
const shortComp = (a,b) => a-b

console.log(numbers.sort((a,b) => b-a))




const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 121
    },
];

console.log(students.sort((a,b) => b.scores - a.scores))
// console.log(students
//     .sort((a,b) => a.age - b.age)
//     .reverse()
// )

console.log(students.sort((a, b) => a.name < b.name ? -1 : 1))








