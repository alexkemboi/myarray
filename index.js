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
function fibonacci(number) {
  let a = 0;
  let b = 1;
  let c = [];
  for (let i = 0; i < number; i++) {
    let temp = a;
    a = b;
    b = temp + b;
    c.push(temp);
  }
  console.log(c);
}
fibonacci(5);
function palidrome(word) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== word[word.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
word = "eye";
console.log(palidrome(word));
