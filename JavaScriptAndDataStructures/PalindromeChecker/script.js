//체크 버튼
const checkBtn = document.getElementById("check-btn");

//버튼 클릭시 함수
const check = () => {
    const textInput = document.getElementById("text-input").value;
    if(textInput === ''){
        alert("Please input a value");
    }
}

checkBtn.addEventListener("click", check);