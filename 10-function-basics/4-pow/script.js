function pow(x, n){
  if(n > 0){
    return (x ** parseInt(n));
  }
  else{
    `Please enter a positive integer for n` ;
  }
}

alert(pow(+prompt(`x?`), +prompt(`n`)));
