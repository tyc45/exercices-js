"" + 1 + 0 // "10"  Si l'opérateur + voit un string à sa gauche ou sa droite, il converti l'autre argument en string

"" - 1 + 0 // -1  Les autres opérateurs convertissent en number à gauche et à droite quoi qu'il arrive

true + false // 1  L'opérateur + converti les éléments autour de lui en number s'il ne voit pas de string

6 / "3" // 2  Voir ligne 3
"2" * "3" // 6 Voir ligne 7

4 + 5 + "px" /* 9px  On résoud les opérations de gauche à droite,
                on a donc 4 + 5 qui se résoud avant d'être converti en string */

"$" + 4 + 5 // $45  Comme précédemment sauf qu'on débute avec un string

"4" - 2 // 2  voir ligne 8

"4px" - 2 // NaN  Quand la conversion en number n'est pas possible, on obtient un NaN

"  -9  " + 5 // " -9 5"  Voir ligne 1

"  -9  " - 5 // -14  La conversion en number ignore les espaces et sauts de ligne

null + 1 // 1  null vaut 0 quand converti en number

undefined + 1 // NaN  undefined n'est pas convertible en number

" \t \n" - 2 // -2  Voir ligne 21
