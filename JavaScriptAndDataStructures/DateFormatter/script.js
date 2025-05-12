const currentDateParagraph = document.getElementById("current-date");
const dateOptionsSelectElement = document.getElementById("date-options");
const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1; //index로 가져오기때문에 1 더해줘야함
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();
const formattedDate = `${day}-${month}-${year}`;

currentDateParagraph.textContent = formattedDate;