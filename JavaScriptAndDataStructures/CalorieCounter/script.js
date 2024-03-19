const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let isError = false;

function cleanInputString(str){
    // const strArray = str.split('');
    // const cleanStrArray = [];
    // for(let i = 0; i < strArray.length; i++){
    //     if(!["+", "-", " "].includes(strArray[i])){
    //         cleanStrArray.push(strArray[i]);
    //     }
    // }
    const regex = /\+-\s/; 
    // +는 정규식에서 특별한 의미가 있는 문자라 \를 앞에 써줘야 함
    // \s는 공백을 의미함
     

}