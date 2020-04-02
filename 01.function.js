/**
 * Autheur: MARCHAND Sébastien
 * TP01 - Javascript - Les fonctions
 * Créations et utilisation de fonctions avec javascript
 */

console.log("01 - function");
nombre1 = 10;
nombre2 = 20;

function additionner(nb1 , nb2)
{
	return nb1 + nb2;
}
resultat1 = additionner(nombre1 , nombre2);
console.log("resultat1 = " + resultat1);

															//variable fonction somme
var somme = function additionner(nb1 , nb2)
{
	return nb1 + nb2;
}

console.log("resultat2 = " + somme(nombre1 , nombre2) );
															//variable fonction multiplication
var multiplication = function multiplication(nb1 , nb2)
{
	return nb1 * nb2;
}

console.log("resultat3 = " + multiplication(nombre1 , nombre2) );

var afficherOperation = function (nomOperation , operation , nb1 , nb2 ){
		
		console.log(nomOperation + "(" + nb1 +", " + nb2 + ") = " + operation(nb1 , nb2));
}

afficherOperation("somme" , somme , 20 , 40);
afficherOperation("multiplication" , multiplication , 10 , 20);

															// Utilisations de fonction anonymes

afficherOperation("multiplication" , function(nombre1 , nombre2){ return nombre1 - nombre2; }  , 15 , 5);