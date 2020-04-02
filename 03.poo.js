/**
 * Autheur: MARCHAND Sébastien
 * TP03 - Javascript - Programmation orientée objet
 */

																//Création fonction constructeur personne qui permet de créer des objet dynamiquement

function Personne (nom,prenom,pseudo) {
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    this.getNomComplet = function () {
        return this.nom + " " + this.prenom + " " + this.pseudo;
    }
}

var personne1 = new Personne('marchand','sebastien','sebmar');
console.log(personne1.getNomComplet());

																// Créer un objet jules en utilisant la fonction constructeur Personne
var jules = new Personne("LEMAIRE", "Jules", "jules77");

																// Créer un objet paul en utilisant la fonction constructeur Personne
var paul = new Personne("LEMAIRE", "Paul", "paul44");


console.log(jules.nom);
console.log(jules.prenom);
console.log(jules.pseudo);

function afficherPersonne(personne) {
    console.log(personne.getNomComplet());
}

afficherPersonne(paul);

jules.pseudo = 'jules44';

afficherPersonne(jules);

console.log(jules.age);

																//Ajouter la propriété age à la structure Personne avec la valeur par défaut NON RENSEIGNE
Personne.prototype.age = "NON RENSEIGNE";

console.log(jules.age);

jules.age = 30;

console.log(jules.age);
																//Ajouter la méthode getInitiales à la structure Personne qui retourne une chaine de caractères
																//(première lettre du prénom et première lettre du nom)

Personne.prototype.getInitiales = function () {
    return this.prenom.charAt(0) + this.nom.charAt(0);
}

console.log(jules.getInitiales());

																//Créer un objet robert sans fonction constructeur
var robert = {
	    prenom: "Robert",
	    nom: "LEPREFET",
	    pseudo: "robert77",
	    getNomComplet: function () {
	        return this.nom + " " + this.prenom + " " + this.pseudo;
	    }
	}

afficherPersonne(robert);

																//Héritage via une fonction constructeur
function Client(nom, prenom, pseudo, numeroClient) {
    Personne.call(this, nom, prenom, pseudo)
    this.numeroClient = numeroClient;
    this.getInfos = function () {
        return nom + " " + prenom + " " + pseudo + " " + numeroClient;
    }
}

var mamoud = new Client("mamoud", "LUCAS", "mamoud44", "c01");

afficherPersonne(mamoud);

console.log(mamoud.numeroClient);

console.log(mamoud.getInfos());