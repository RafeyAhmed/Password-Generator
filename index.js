

const slider = document.getElementById('passLength');
const output = document.getElementById('passLengthValue');
const lowercaseCheck =  document.getElementById('lowercaseCheck');
const uppercaseCheck =  document.getElementById('uppercaseCheck');
const spcharCheck =  document.getElementById('spcharCheck');
const numberCheck =  document.getElementById('numberCheck');
document.getElementById('generateBtn').onclick = generatePassword;


let isHcChecked = uppercaseCheck.checked;
let isLcChecked = lowercaseCheck.checked;
let isSpChecked = spcharCheck.checked;
let isNumChecked = numberCheck.checked;

uppercaseCheck.addEventListener('change', function() {
  isHcChecked = uppercaseCheck.checked;
  console.log('UC is checked:', isHcChecked);
});
lowercaseCheck.addEventListener('change', function() {
  isLcChecked = lowercaseCheck.checked;
  console.log('LC is checked:', isLcChecked);
});
spcharCheck.addEventListener('change', function() {
  isSpChecked = spcharCheck.checked;
  console.log('SPC is checked:', isSpChecked);
});
numberCheck.addEventListener('change', function() {
  isNumChecked = numberCheck.checked;
  console.log('NUMC is checked:', isNumChecked);
});

slider.addEventListener('input', function() {
  output.textContent = slider.value;
});

function generatePassword(length, 
  includeSpecialChars,  
  includeLowChars, 
  includeHighChars,  
  includeNumbers) { 

const lcChars = "abcdefghijklmnopqrstuvwxyz";
const hcChars = "ABCDEFGHIJKLMONPQRSTUVWXYZ"; 
const Nums = "123456789";
const spcChars = "%^&*#@!#~][|"

let allowedChars = "";
let password = "";
const passLength = slider.value;

allowedChars += isSpChecked ? spcChars : "";
allowedChars += isHcChecked ? hcChars : "";
allowedChars += isLcChecked ? lcChars : "";
allowedChars += isNumChecked ? Nums : "";

if(isSpChecked == false && isLcChecked == false && isHcChecked == false && isNumChecked == false){
  window.alert('Choose one option Please')
  return `choose one of the options, "ALL FOUR RECOMMENDED"`;
}else{
  ""
}

for (let i = 0; i < passLength; i++) {
let randomIndex = Math.floor(Math.random() * allowedChars.length);
password += allowedChars[randomIndex];
}

document.getElementById('password').value = password;
}



















