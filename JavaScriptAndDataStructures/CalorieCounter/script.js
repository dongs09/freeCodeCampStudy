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
    //위 코드처럼 해도 되지만, 아래 코드처럼 해도 됨
    const regex = /[+-\s]/g; 
    // +는 정규식에서 특별한 의미가 있는 문자라 \를 앞에 써줘야 함
    // \s는 공백을 의미함
    // []안에 담으면 +앞에 \가 필요없어짐
    // []안에 담으면 문자 하나씩 각각 인식
    // 맨 뒤에 g를 붙이면, global이란 뜻으로, 문장 끝날때까지 매칭된 문자를 계속해서 찾음
    return str.replace(regex,"");
}

function isInvalidInput(str){
    const regex = /\d+e\d+/i;   //숫자만 뽑아내는 정규식
    // 맨 뒤에 i를 붙으면, insensitive라는 뜻으로, 대소문자 구별없이 인식
    // +를 붙이면 한번 또는 여러번 매치를 찾음 ex) 1e1도 되고 11e11도 됨
    // \d는 [0-9]와 같은 뜻이다. digit 이라는 뜻
    return str.match(regex);
}

function addEntry(){
    //const targetId = "#"+entryDropdown.value;
    //const targetInputContainer = document.querySelector(targetId+' .input-container').value;
    //위 코드처럼 해도 되지만, 아래 코드처럼 해도 됨
    const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`).value;
    const entryNumber = targetInputContainer.querySelectorAll();
}