const weasleyJson = '[{"name": "Charlie", "surname": "Weasley", "house": "Griffyndor"}, {"name": "Percy", "surname": "Weasley", "house": "Griffyndor"}, {"name": "George", "surname": "Weasley", "house": "Griffyndor"}, {"name": "Fred", "surname": "Weasley", "house": "Griffyndor"}, {"name": "Ronald", "surname": "Weasley", "house": "Griffyndor"}]';

let weasleyArr = JSON.parse(weasleyJson);

weasleyArr.push({"name": "Ginny", "surname": "Weasley", "house": "Griffyndor"});

const weasleyJsonComplete = JSON.stringify(weasleyArr, null, 2);

console.log(weasleyJsonComplete);





