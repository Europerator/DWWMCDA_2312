const cartes = await (await fetch("./assets/cardgame.json")).json();
//console.log(cartes);

function creerTableauCartes() {

    //création de la structure du tableau
    let table = document.createElement("table");
    table.setAttribute("id", "tableauCartes");
    let thead = table.createTHead();
    let tbody = table.createTBody();

    //création de la ligne d'entête
    const entete = ["Id", "Name", "Level", "Description", "Power", "Attack", "Armour", "Damage", "Mitigation", "Played", "Victory", "Defeat", "Draw"];
    let ligneEntete = thead.insertRow();
    for (let titre of entete) {
        let heading = document.createElement("th");
        heading.textContent = titre;
        ligneEntete.appendChild(heading);
    }

    //insertion des cartes    
    for (let carte of cartes) {
        let ligne = tbody.insertRow();
        for (let titre of entete) {
            let cellule = ligne.insertCell();
            cellule.textContent = carte[titre.toLowerCase()];
        }
    }

    //ajout du tableau finalisé au body
    document.body.appendChild(table);
}

creerTableauCartes();