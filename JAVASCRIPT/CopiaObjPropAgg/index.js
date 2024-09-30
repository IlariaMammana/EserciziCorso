let student = {
    name: "Fred",
    surname: "Weasley",
    grade: "5th",
    house: "Griffyndor"
}

let copyStudent = {
    ...student,
    siblings: "Charlie, Percy, George, Ron, Ginny"
}

console.log(student);
console.log(copyStudent);


