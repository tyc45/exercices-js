alert( alert(1) || 2 || alert(3) ); // 1 puis 2

/* Le code résoud alert(1) en 1er, ce qui ouvre une popup qui affiche 1 et retourne undefined
Ensuite l'opérateur logique se résoud, il voit undefined qui vaut false en booléen,
il passe donc à l'argument suivant, 2, qui est true car un nombre non nul
C'est donc la valeur de retour que alert affichera */
