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
    const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
    const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length +1;

    const HTMLString = `<label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
        <input type="text" placeholder="Name" id="${entryDropdown.value}-${entryNumber}-name"/>
        <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} calories</label>
        <input type="number" min="0" placeholder="Calories" id="${entryDropdown.value}-${entryNumber}-calories">
    `;
    targetInputContainer.insertAdjacentHTML('beforeend',HTMLString);
}

function calculateCalories(e){
    e.preventDefault();
    isError = false;

    const breakfastNumberInputs = document.querySelectorAll('#breakfast input[type=number]');
    const lunchNumberInputs = document.querySelectorAll('#lunch input[type=number]');
    const dinnerNumberInputs = document.querySelectorAll('#dinner input[type=number]');
    const snacksNumberInputs = document.querySelectorAll('#snacks input[type=number]');
    const exerciseNumberInputs = document.querySelectorAll('#exercise input[type=number]');

    const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
    const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
    const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
    const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
    const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);

    const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);

    if(isError){
        return;
    }
    const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
    const remainingCalories = budgetCalories - consumedCalories + exerciseCalories;
    const surplusOrDeficit = remainingCalories < 0 ? "Surplus" : "Deficit";
    output.innerHTML = `
        <span class="${surplusOrDeficit.toLowerCase()}">
            ${Math.abs(remainingCalories)} Calorie ${surplusOrDeficit}
        </span>
        <hr>
        <p>${budgetCalories} Calories Budgeted</p>
        <p>${consumedCalories} Calories Consumed</p>
        <p>${exerciseCalories} Calories Burned</p>
    `;
    output.classList.remove('hide');
}

function getCaloriesFromInputs(list){
    let calories = 0;
    for(const item of list){
        const currVal = cleanInputString(item.value);
        const invalidInputMatch = isInvalidInput(currVal);
        if(invalidInputMatch){
            alert(`Invalid Input: ${invalidInputMatch[0]}`);
            isError = true;
            return null;
        }
        calories += Number(currVal);
    }
    return calories;
}

function clearForm(){
    const inputContainers = Array.from(document.querySelectorAll('.input-container'));
    /** 
     * querySelectorAll은 NodeList를 반환하고,
     * 이건 array같지만 array는 아니다.
     * 하오나  array함수중에 .from()함수는 array같은 애들을 array로 반환해줌.
     */
    for(const container of inputContainers){
        container.innerHTML = '';
    }
    budgetNumberInput.value = '';
    output.innerText = '';
    output.classList.add('hide');
}

addEntryButton.addEventListener('click', addEntry);
calorieCounter.addEventListener('submit', calculateCalories);
clearButton.addEventListener('click', clearForm);