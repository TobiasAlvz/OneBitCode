const multiply = (a, b) => a * b;

console.log(multiply(5, 2));

// ====================================//////////=======================
const students = [
  { name: "Douglas", age: 10 },
  { name: "Maria", age: 12 },
  { name: "Wilson", age: 8 },
  { name: "Leandro", age: 7 },
  { name: "José", age: 11 },
];

const filter = students.filter((student) => student.age > 7);

const map = students.map((student) => student.name);

console.log(filter);

console.log(map)
