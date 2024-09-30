let student = {
    name: "Bob",
    surname: "Donovan",
    grade: "A",
};

let {name: n, surname: s, major = "Biomedical Engineering", grade: g, university: uni = "University of Technology of Sydney"} = student;

console.log("The student " + n + " " + s + " from " + uni + " (" + major + "), has the grade: " + g + ".");


