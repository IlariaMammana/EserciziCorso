let person = {
  name: "Miguel",
  age: "37",
  city: "New York"
}

person.job = "Personal Trainer";

for ( let entries in person) {
    console.log(entries + ": " + person[entries]);
}