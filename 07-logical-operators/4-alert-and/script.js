alert( alert(1) && alert(2) ); // 1 puis undefined

/* Le code rédoud alert(1) en 1er, qui ouvre une pop up qui affiche 1
et revoie undefined.
Ensuite le code résoud l'opérateur logique qui voit undefined, false en booléen,
C'est donc la valeur de retour qui sera affichée pour le 1er alert.
*/
