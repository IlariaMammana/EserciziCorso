let student = {
    name: "Bob",
    surname: "Donovan",
    grade: "A",
    major: "technology"
};

let {name: n, surname: s, major, grade: g} = student;

console.log("The student " + n + " " + s + " from the major " + major + ", has the grade: " + g + ".");


