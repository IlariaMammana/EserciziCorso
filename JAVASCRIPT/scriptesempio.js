const title = document.querySelector('.title');
const ps = Array.from(document.querySelectorAll('p'))
const container = document.querySelector('.container')

const students = [
    {
      name: "Alice",
      age: 22,
      major: "Computer Science",
      grade: "A",
      hobbies: ["reading", "coding", "chess"]
    },
    {
      name: "Bob",
      age: 21,
      major: "Mathematics",
      grade: "B",
      hobbies: ["gaming", "basketball", "music"]
    },
    {
      name: "Charlie",
      age: 23,
      major: "Physics",
      grade: "A",
      hobbies: ["photography", "hiking", "traveling"]
    },
    {
      name: "Diana",
      age: 20,
      major: "Biology",
      grade: "A-",
      hobbies: ["painting", "volunteering", "soccer"]
    },
    {
      name: "Eve",
      age: 22,
      major: "Chemistry",
      grade: "B+",
      hobbies: ["dancing", "science experiments", "blogging"]
    }
  ];


for (let index = 0; index < students.length; index++) {
    container.innerHTML += 
    `<div class='student-card'>
        <h3>${students[index].name}</h3>
        <p>${students[index].major}</p>
        <p>${students[index].grade}</p>
    </div>`
    
}

title.innerHTML = 'Titolo modificato';