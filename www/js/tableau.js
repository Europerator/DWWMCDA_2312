
function creerTableauInscription() {
    //définition du tableau de noms
    let inscrits=["Mike Dev", "John Makenzie", "Léa Grande"];

    //création du tableau HTML
    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");


    //creation de la ligne d'entête
    let entete = ["Nom", "Prénom", "Email"];
    let ligneEntete = document.createElement("tr");
    for (titre of entete) {
        let heading = document.createElement("th");
        heading.innerHTML = titre;
        ligneEntete.appendChild(heading);
    }

    //création des lignes du tableau
    for (nom of inscrits) {
        ligne = document.createElement("tr");
        let paire = nom.split(" ");
        let cellule1 = document.createElement("td");
        cellule1.innerHTML = paire[0];
        let cellule2 = document.createElement("td");
        cellule2.innerHTML = paire[1];
        let cellule3 = document.createElement("td");
        cellule3.innerHTML = paire[0] + "." + paire[1] + "@example.com";
        ligne.appendChild(cellule1);
        ligne.appendChild(cellule2);
        ligne.appendChild(cellule3);
        tbody.appendChild(ligne);
    }

    //finalisation du tableau
    thead.appendChild(ligneEntete);
    table.appendChild(thead);
    table.appendChild(tbody);
    document.body.appendChild(table);
}

creerTableauInscription();