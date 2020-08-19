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