let n = +prompt(`Entrez un nombre`);

for(i = 2; i <= n; i++){
  let prime = true;

  for(j = 2; j < i; j++){
    if(i%j == 0) prime = false;
  }
  
  if(prime) alert(i);
}
