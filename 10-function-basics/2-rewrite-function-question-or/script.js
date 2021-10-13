function checkAge(age){
  return (age > 18) ? true : `Did parents allow you?`;
}

function checkAgeAgain(age){
  return (age > 18) || `Did parents allow you?`;
}

alert(checkAge(prompt(`How old are you?`)));
alert(checkAgeAgain(prompt(`How old are you?`)));
