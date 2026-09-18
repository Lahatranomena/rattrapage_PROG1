function Echanger(tableau, premierIndex, deuxiemeIndex) {
    let variable = tableau[premierIndex]
    tableau[premierIndex] = tableau[deuxiemeIndex]
    tableau[deuxiemeIndex] = variable

    return tableau
}

console.log(Echanger([0, 1, 0, 0, 0, 1], 0, 1));

function Ranger(tableau) {
    let nouveauTableau = []
    let indexGauche = 0
    let indexDroite = tableau.length-1
    
    for (let i = 0; i < tableau.length; i++) {
        if (tableau[i] == 0) {
            nouveauTableau[indexGauche] = tableau[i]
            indexGauche++
        } else {
            nouveauTableau[indexDroite] = tableau[i]
            indexDroite--
        }
    }
    return nouveauTableau
}

console.log(Ranger([0, 1, 0, 0, 1, 0]));

function NombreUn(tableau) {
    let compteur = 0

    for (let i = 0; i < tableau.length; i++) {
        if (tableau[i] == 1) {
            compteur = compteur + 1
        }
    }
    return compteur
}

console.log(NombreUn([0, 0, 1, 0, 1, 1, 0, 1, 1]));

function triLignes(M) {
    let resultat = []

    for (let i = 0; i < M.length; i++) {
        resultat = resultat + NombreUn(M[i])

        let valeurMin = 0
        let indexGauche = 0
        for (let j = 0; j < resultat.length; j++) {
            if (resultat[j] == valeurMin) {
                
            }
        }
    }
    return resultat
}

console.log(triLignes([ 
  [0, 0, 1, 1], 
  [0, 0, 0, 1], 
  [1, 1, 1, 1], 
  [0, 0, 0, 0] 
] ));
