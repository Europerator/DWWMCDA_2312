let inscrits=["Mike Dev", "John Makenzie", "Léa Grande"];

function creerListeInscription() {
    let liste = document.createElement("ul");
    liste.setAttribute("id", "listeInscrits");
    for (nom of inscrits) {
        let li = document.createElement("li");
        li.textContent = nom;
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
        heading.textContent = titre;
        ligneEntete.appendChild(heading);
    }

    //création des lignes du tableau
    for (indexNom in inscrits) {
        ligne = document.createElement("tr");
        let paire = inscrits[indexNom].split(" ");
        let cellulePrenom = document.createElement("td");
        cellulePrenom.textContent = paire[0];
        let celluleNom = document.createElement("td");
        celluleNom.textContent = paire[1];
        let celluleMail = document.createElement("td");
        celluleMail.textContent = paire[0] + "." + paire[1] + "@example.com";
        let celluleBouton = document.createElement("td")
        let deleteBouton = document.createElement("button");
        deleteBouton.textContent = "Supprimer";
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
    valide = true;
    message = document.getElementById("resultatInscription");
    if ((prenom.length < 2) || (nom.length < 2)) {
        console.log("Un nom/prénom doit être composé d'au moins deux lettres.");
        message.textContent = "Un nom/prénom doit être composé d'au moins deux lettres.";
        valide = false;
    }
    if (!(/^[A-zÀ-ÿ]+$/.test(prenom)) || !(/^[A-zÀ-ÿ]+$/.test(nom))) {
        console.log("Veuillez n'utiliser que des caractères alphabétiques.");
        message.textContent = "Veuillez n'utiliser que des caractères alphabétiques.";
        valide = false;
    }
    nomComplet = prenom + " " + nom;
    if (inscrits.includes(nomComplet)) {
        console.log("Cette personne est déjà inscrite.");
        message.textContent = "Cette personne est déjà inscrite.";
        valide = false;
    }
    if (valide) {
    ajouter(nomComplet);
        console.log(nomComplet + " a bien été ajouté.e.");
        message.textContent = nomComplet + " a bien été ajouté.e.";
    }
}

creerListeInscription();
creerTableauInscription();
