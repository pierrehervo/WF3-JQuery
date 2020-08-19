$(function(){
	/* On selectionne toutes les div sous l'identifiant accordéon article et on les masque*/
	var allPanels = $('.panel').hide();

	//On déplie la 1ère div qui porte la classe panel
	$("div.panel:first").show();

	// Action a effectuer au clic sur le lien h2
	$('.toggleDetail').click(function(){

		// On replie toutes les div qui ont la classe panel
		allPanels.slideUp();

		//On déplie la div cliquée
	$(this).parent().next().slideDown();
	});
});