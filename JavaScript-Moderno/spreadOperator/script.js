const students = ["João", "Igor", "Marcos", "Geraldo"];
// Não é modificado
const moreStudents = [...students];

const newStudents = students;

// Modifica os dois
newStudents.pop();
newStudents.push("Maria");
moreStudents.push("Maria");

console.log(newStudents);
console.log(students);
console.log(...moreStudents);
