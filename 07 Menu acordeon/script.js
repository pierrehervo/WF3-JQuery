$(function () {
  // On cache les sous-menus :
  $(".navigation ul.subMenu").hide();

  /*On modifie l'évènement "click" sur les liens dans les items de liste
  qui portent la classe "toggleSubMenu" :*/
  $(".navigation li.toggleSubMenu > a").click( function () {
     // Si le sous-menu était déjà ouvert, on le referme (:visible -> sélectionne les éléments visibles)
    if ($(this).next("ul.subMenu:visible").length != 0) {
      $(this).next("ul.subMenu").slideUp("slow");
      $(this).removeClass('open');
    }
    else {
      // Fermeture de tous les sous-menus
      $(".navigation ul.subMenu").slideUp("slow");
      // Dérouler le sous-menu sélectionné
      $(this).next("ul.subMenu").slideDown("slow");
      $(this).addClass('open');
    }
    });
});