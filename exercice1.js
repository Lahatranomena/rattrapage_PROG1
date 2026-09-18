function NegatifPositif(tableau) {
    let nouveauTableau = []
    let indexGauche = 0;
    let indexDroite = tableau.length-1

    for (let i = 0; i < tableau.length; i++) {
        if (tableau[i] <= 0) {
            nouveauTableau[indexGauche] = tableau[i]
            indexGauche++
        } else {
            nouveauTableau[indexDroite] = tableau[i]
            indexDroite--
        }
    }
    return nouveauTableau
}

console.log(NegatifPositif([3, -1, 0, 4, -2, 5, -3] ));
