//strings are immutable .. string은 불변한다?
const character = "#";
//console.log(character);
//character = "World";
//console.log(character);
//let secondCharacter;
//secondCharacter = character;
//console.log(secondCharacter);

// let profession = "teacher";
// let age;

// console.log(profession);
// console.log(age);

const count = 8;
//console.log(count + 1);

const rows = [];
// console.log(rows[0]);
// rows[rows.length - 1] = 10;

// let cities = ["London", "New York", "Mumbai"];
// console.log(cities);
// cities[cities.length-1] = "Mexico City";
// console.log(cities);

//let pushed = rows.push("freeCodeCamp");
//console.log(pushed);

//let popped = rows.pop();
//console.log(popped);

//console.log(rows);

for (let i=0; i < count; i++) {
    rows.push(character.repeat(i +1));
}

let result = "";

for(const row of rows){
    result = result + row + "\n";
}
console.log(result);

function padRow(name){
    return name;
}

// function addTwoNumbers(firstNumber, secondNumber){
//     return firstNumber + secondNumber;
// }

// const sum = addTwoNumbers(5,10);
// console.log(sum);

const call = padRow("Donna");
console.log(call);