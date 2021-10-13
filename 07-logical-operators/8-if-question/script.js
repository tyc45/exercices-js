if (-1 || 0) alert( 'first' ); //  S'affiche, || renvoie -1 qui est true
if (-1 && 0) alert( 'second' ); //  Ne s'affiche pas, && renvoie 0 qui est false
if (null || -1 && 1) alert( 'third' ); // S'affiche, && renvoie 1 puis || renvoie 1 qui est true
