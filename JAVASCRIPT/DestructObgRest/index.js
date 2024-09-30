let student = {
    name: "Fred",
    surname: "Weasley",
    grade: "5th",
    house: "Griffyndor",
    school: "Hogwarts",
}

let {name, surname, ...moreInfo} = student;

console.log(name);
console.log(surname);
console.log(moreInfo);


