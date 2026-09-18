function Echanger(tableau, premierIndex, deuxiemeIndex) {
    let variable = tableau[premierIndex]
    tableau[premierIndex] = tableau[deuxiemeIndex]
    tableau[deuxiemeIndex] = variable

    return tableau
}

console.log(Echanger([0, 1, 0, 0, 0, 1], 0, 1));


