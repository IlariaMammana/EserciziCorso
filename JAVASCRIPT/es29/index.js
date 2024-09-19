const students = [
    { name: 'Marco', grade: 50 },
    { name: 'Bob', grade: 68 },
    { name: 'Jennifer', grade: 65 },
    { name: 'Paola', grade: 56 },
    { name: 'Filippo', grade: 60 },
    { name: 'Leyla', grade: 51 }
];


const passedStudents = students.filter((student) => {
    return student.grade >= 60;
});

console.log(passedStudents);

const firstWorstGrade = students.find(student => student.grade < 60);

console.log(firstWorstGrade);

