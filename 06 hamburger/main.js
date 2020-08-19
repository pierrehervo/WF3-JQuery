'use strict'; 
let button;
let icon;

function dropdown_menu() {
  $("#mainmenu").slideToggle("slow", function() {
  	if ($('#mainmenu').hasClass('close')) {
  		$('#mainmenu').removeClass('close');
      	$('#mainmenu').addClass('open');
      	$('.btnHamburger i').removeClass('fa-bars');
      	$('.btnHamburger i').addClass('fa-times');
    }
    else {
    	$('#mainmenu').removeClass('open');
      	$('#mainmenu').addClass('close');
      	$('.btnHamburger i').removeClass('fa-times');
      	$('.btnHamburger i').addClass('fa-bars');
    }
  });
}
/***********************************************************************************/
/* ******************************** CODE PRINCIPAL *********************************/
/***********************************************************************************/

$(function(){
	$(".btnHamburger").on("click",dropdown_menu);
});