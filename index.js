let myArray = [1, 2, 3, 4, 5, 6];
myArray.push(7);
myArray.pop();
myArray.shift();
console.log(myArray);
let evenValues = myArray.filter((number) => number % 2 == 0);
console.log(evenValues);
let students = [
  {
    name: "John",
    age: 20,
    score: 90,
  },
  {
    name: "Jane",
    age: 21,
    score: 80,
  },
  {
    name: "Mike",
    age: 2,
    score: 70,
  },
];
let newStudents = students.sort((a, b) => a.age - b.age);
console.log(newStudents);
