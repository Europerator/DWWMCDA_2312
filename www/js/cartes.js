const cartes = await (await fetch("./assets/cardgame.json")).json();
//console.log(cartes);

function creerTableauCartes() {

    //création de la structure du tableau
    let table = document.createElement("table");
    table.setAttribute("id", "tableauCartes");
    let thead = table.createTHead();
    let tbody = table.createTBody();

    //création de la ligne d'entête
    const entete = ["Id", "Name", "Level", "Description", "Power", "Attack", "Armor", "Damage", "Mitigation", "Played", "Victory", "Defeat", "Draw"];
    let ligneEntete = thead.insertRow();
    for (let titre of entete) {
        let heading = document.createElement("th");
        heading.addEventListener("click", () => trierTableau(titre.toLowerCase()));
        // (ci-dessus solution d'Alexandre#2, parce que ci-dessous causait une erreur)
        //heading.setAttribute("onclick", "trierTableau(" + titre.toLowerCase() + ")");
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

function comparerCartes(a, b, critere) {
    switch (critere) {
        case "name":
            return a["name"].localeCompare(b["name"]);
        case "level":
            return a["level"] - b["level"];
        case "description":
            return a["description"].localeCompare(b["description"]);
        case "power":
            return a["power"] - b["power"];
        case "attack":
            return a["attack"] - b["attack"];
        case "armor":
            return a["armor"] - b["armor"];
        case "damage":
            return a["damage"] - b["damage"];
        case "mitigation":
            return a["mitigation"] - b["mitigation"];
        case "played":
            return a["played"] - b["played"];
        case "victory":
            return a["victory"] - b["victory"];
        case "defeat":
            return a["defeat"] - b["defeat"];
        case "draw":
            return a["draw"] - b["draw"];
        default:
            return a["id"]-b["id"];
    }
}

function trierTableau(critere) {
    document.getElementById("tableauCartes").remove();
    cartes.sort(function(a, b) {
        return comparerCartes(a, b, critere);
    });
    creerTableauCartes();
}

creerTableauCartes();
trierTableau("name");