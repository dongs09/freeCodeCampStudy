//체크 버튼
const checkBtn = document.getElementById("check-btn");

//버튼 클릭시 함수
const check = () => {
    const textInput = document.getElementById("text-input").value;
    const cleaned = textInput.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    if(cleaned === ''){
        alert("Please input a value");
    }else{
        const result = document.getElementById("result");
        if(cleaned.length === 1){
            result.textContent = textInput + " is a palindrome";
        }
        // 정리된 문자열을 뒤집어서 비교
        const reversed = cleaned.split('').reverse().join('');
        if(cleaned === reversed){
            result.textContent = textInput + " is a palindrome";
        }else{
            result.textContent = textInput + " is not a palindrome";
        }
    }
    
}

checkBtn.addEventListener("click", check);