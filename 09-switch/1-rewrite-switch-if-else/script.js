let browser = prompt(`What's your browser?`);

if(browser == `Edge`){
  alert(`You've got the Edge!`);
}
else if(browser == `Chrome` || `Firefox` || `Safari` || `Opera`){
  alert(`Okay we support these browsers too`);
}
else{
  alert(`We hope that this page looks ok!`);
}
