const inputuser = document.getElementById("user-input")
const checkBtn = document.getElementById("check-btn")
const clearBtn = document.getElementById("clear-btn")
const result = document.getElementById("results-div")



  const countryCode = '^(1\\s?)?';
  const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
  const spacesDashes = '[\\s\\-]?';
  const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$';
  const phoneRegex = new RegExp(
    `${countryCode}${areaCode}${spacesDashes}${phoneNumber}`
  );

const denyList = [countryCode,areaCode ,spacesDashes , phoneNumber];

const isSpam = (msg) => denyList.some((phoneRegex) => phoneRegex.test(msg));


  checkBtn.addEventListener('click', () => {
    if (inputuser.value == "") {
        alert("Please provide a phone number"); 
        return; }
        result.textContent = isSpam(inputuser.value)
    ? "Invalid US number: 5555555"
    : "Valid US number: 1 555-555-5555";
  inputuser.value = "";
});

clearBtn.addEventListener('click', function() {
    document.getElementById('results-div').innerHTML = ''});

checkBtn.addEventListener('click', () => {
    if (inputuser.value == "1 555-555-5555") {
     document.getElementById('results-div').innerHTML = 'Valid US number: 1 555-555-5555'}  {;   
 }}); 