//strings are immutable .. string은 불변한다?
const character = "!";
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

const count = 10;
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

// TODO: use a different type of loop

for (let i=1; i <= count; i++) {
    if(inverted){
        rows.unshift(padRow(i, count));
    } else {
        rows.push(padRow(i, count));
    }
}


/*
while(rows.length < count){
 rows.push(padRow(rows.length +1, count));
}
*/

/*
for(let i = count; i > 0; i--){
    rows.push(padRow(i, count));
}
*/

/*
const numbers = [1,2,3];
//shfit는 맨 앞의 값을 빼고, pop은 맨 뒤의 값을 뺌 - 그리고 그 값을 return
const shifted = numbers.shift();
console.log(shifted);
//unshift는 array의 맨 앞에 값을 넣어줌, push는 맨 뒤에 값을 넣어줌 - 그리고 max(index)를 return
const unshifted = numbers.unshift(5);
console.log(numbers);
console.log(unshifted);
*/

/*
if ("") {
    console.log("Condition is true");
  } else if(5 > 10) {
    console.log("5 is less than 10");
  } else {
    console.log("This is the else block");
  }
*/

let result = "";

for(const row of rows){
    result = result + row + "\n";
}
console.log(result);

let inverted = false;

function padRow(rowNumber, rowCount){
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

// function addTwoNumbers(firstNumber, secondNumber){
//     return firstNumber + secondNumber;
// }

// const sum = addTwoNumbers(5,10);
// console.log(sum);