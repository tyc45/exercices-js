let age = prompt(`Quel est votre age?`);

// 1ere variante

if(age < 14 || age > 90){
  alert(`Success!`);
}

// 2nde variante

if(!(age >= 14) || !(age <= 90)){
  alert(`Success!`);
}
