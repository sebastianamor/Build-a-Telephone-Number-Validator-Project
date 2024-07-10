const inputuser = document.getElementById("user-input")
const checkBtn = document.getElementById("check-btn")
const clearBtn = document.getElementById("clear-btn")
const result = document.getElementById("results-div")

function checkNumber(){
 const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;

if (inputuser.value == "") {
 return alert("Please provide a phone number");} 
  
  let item = document.createElement("li")
  result.appendChild(item);

  if (regex.test(inputuser.value)){
    item.innerHTML = "有効な米国の電話番号："+inputuser.value;
  } else {
    item.innerHTML = "無効な米国の電話番号： "+inputuser.value;
  }}

checkBtn.addEventListener("click",checkNumber);

clearBtn.addEventListener('click', () => {result.innerHTML = '';}) 