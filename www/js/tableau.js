let inscrits=["Mike Dev", "John Makenzie", "Léa Grande"];

function creerListeInscription() {
    let liste = document.createElement("ul");
    liste.setAttribute("id", "listeInscrits");
    for (nom of inscrits) {
        let li = document.createElement("li");
        li.innerHTML = nom;
        liste.appendChild(li);
    }
    document.body.appendChild(liste);
}

function creerTableauInscription() {

    //création du tableau HTML
    let table = document.createElement("table");
    table.setAttribute("id", "tableauInscrits");
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
    for (indexNom in inscrits) {
        ligne = document.createElement("tr");
        let paire = inscrits[indexNom].split(" ");
        let cellulePrenom = document.createElement("td");
        cellulePrenom.innerHTML = paire[0];
        let celluleNom = document.createElement("td");
        celluleNom.innerHTML = paire[1];
        let celluleMail = document.createElement("td");
        celluleMail.innerHTML = paire[0] + "." + paire[1] + "@example.com";
        let celluleBouton = document.createElement("td")
        let deleteBouton = document.createElement("button");
        deleteBouton.innerHTML = "Supprimer";
        deleteBouton.setAttribute("onclick", "supprimer(" + indexNom + ")");
        celluleBouton.appendChild(deleteBouton);
        ligne.appendChild(cellulePrenom);
        ligne.appendChild(celluleNom);
        ligne.appendChild(celluleMail);
        ligne.appendChild(celluleBouton);
        tbody.appendChild(ligne);
    }

    //finalisation du tableau
    thead.appendChild(ligneEntete);
    table.appendChild(thead);
    table.appendChild(tbody);
    document.body.appendChild(table);
}

function raffraichirPage() {
    document.getElementById("listeInscrits").remove();
    document.getElementById("tableauInscrits").remove();
    creerListeInscription();
    creerTableauInscription();
}

function supprimer(index) {
    inscrits.splice(index, 1);
    raffraichirPage();
}

function ajouter(nouveau) {
    inscrits.push(nouveau);
    raffraichirPage();
}

function validerAjout() {
    prenom = document.getElementById("prenom").value;
    nom = document.getElementById("nom").value;
    if ((prenom.length > 2) && (nom.length > 2)) {
        ajouter(prenom + " " + nom);
    }
}

creerListeInscription();
creerTableauInscription();
