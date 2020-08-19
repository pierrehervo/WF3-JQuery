/*LES SELECTEURS EN JQUERY*/

$(document).ready(params =>{
	$('p');
	$('.green');
	$('#color');

	$('p span');/*tous les span des p*/
	$('p > span'); //(cible les enfants direct)
	$('p > span').first(); //Selectionne le premier enfant direct

	$('div').find('span');

	$('p').color(); /*je demande à jQuery de me donner la couleur de p. C'est un 'GETTER'*/
	$('p').color('orange'); /*je demande à Jquery de changer la couleur p en orange. c'est un 'SETTER'*/

	$('input[name=firstname]').val(); /*Prend la valeur de l'input. GETTER*/
	$('input[name=firstname]').val('Bob');/*Donne la valeur Bob. SETTER*/

});