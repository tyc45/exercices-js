let userName = prompt(`Who're you (oohooh! oohooh!)`);

if(userName == `Admin`){
  let pw = prompt(`Password?`);
  
  if(pw == `TheMaster`){
    alert(`Welcome!`);
  }
  else if(pw == null || pw == ``){
    alert(`Canceled`);
  }
  else{
    alert(`Wrong password`);
  }
}
else{
  alert(`Canceled`);
}
