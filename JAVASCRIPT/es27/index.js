let student = {
    name: "Harry Potter",
    age: "11",
    grade: "1st",
    school: "Hogwarts",
}

const entries = Object.entries(student)

console.log(Object.entries(entries));

entries.forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
})