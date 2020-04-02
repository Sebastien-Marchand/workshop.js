/**
 *Autheur: MARCHAND Sébastien
 * TP02 - Javascript - Les tableaux
 * 
 */

var villes = ["paris" , "nantes" , "angers" , "saint-nazaire" , "le mans"];

																					//utilisation de forEach sur un tableau pour l'afficher avec fonction anonymes
villes.forEach(function(elem){ console.log(elem);});

																					// Utilisation de every pour vérifié sur chaqu'un des élement du tableau une condition précise afin ve férifié si c'est vrai, dans le cas contraire
																					// Si un des élement est faux la comparaison s'arrête et un false est retourné
lettreADansToutesLesVilles = function(tab)
{
	return tab.every(function(elem)
						{ 
							console.log(elem.indexOf("a"))
							return  elem.indexOf("a") >= 0 ;
						})
}
console.log("lettreADansToutesLesVilles : " + lettreADansToutesLesVilles(villes));

																					//Utilisation de some pour vérifié sur chaqu'un des élement du tableau une condition précise afin ve férifié si c'est faux
																					//Si un des élement est vrai la comparaison s'arrête et un vrai est retourné

auMoinsUneVilleAvecUnTiret = function ( tab ){
	return tab.some(function(elem){
						console.log(elem.indexOf("-"))
						return  elem.indexOf("-") >= 0 ;
					})
}

console.log("auMoinsUneVilleAvecUnTiret : " + auMoinsUneVilleAvecUnTiret(villes));

																					//Utilisation de filter pour créer un tableaux, sur chaqu'un des élements du tableau une condition est vérifié
																					//Si un des élement est vrai il est ajouter, si il est faux il est ignoré

villesSansTiretSansEspace = villes.filter(function(elem){
						console.log(!elem.includes("-") && !elem.includes(" "))
						return  !elem.includes("-") && !elem.includes(" ") ;
					});

console.log("villesSansTiretSansEspace : [" + villesSansTiretSansEspace + "]");

																					//Construction tableau  d'élements finissant par 's'

villesMajusculeSeTerminantParS = villes.filter(function(elem){
					console.log(elem.endsWith('s'));
					return elem.endsWith('s');
				});

console.log("villesMajusculeSeTerminantParS : [" + villesMajusculeSeTerminantParS + "]");