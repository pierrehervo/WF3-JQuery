$(function() {
	$(window).load(function(){
	$('body').addClass('preloader-site');

/*Fadeout sur le preloader-wrapper et ajout d'un délai pour afficher l'animation pdt quelque secondes*/
	$('.preloader-wrapper').delay(3000).fadeOut('slow');
	$('body').removeClass('preloader-site');
	$('.flexslider').flexslider({
    	animation: "slide",
    	animationLoop: false,
    	itemWidth: 210,
    	itemMargin: 5
  		});
	});
});
$(function() {
    /* Sticky navigation + top */
    var offset = $("header nav").offset();
    //console.log(offset);

    $(window).scroll(function (event) {
        // A chaque fois que l'utilisateur va scroller (descendre la page)
        var y = $(this).scrollTop(); // On récupère la valeur du scroll vertical
        // Si cette valeur > à offset on ajoute la classe
        if (y >= offset.top) {
            $('header nav').addClass('fixed');
            $('.top').fadeIn ("slow");
        } else {
            $('header nav').removeClass('fixed');
            $('.top').fadeOut ("slow");
        }

    });
});
  
