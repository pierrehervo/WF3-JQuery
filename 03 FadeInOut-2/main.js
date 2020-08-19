$(function() {
  $('#btnAction').click(function() {
  if ($('#btnAction').hasClass('fadein')) {
  	$('#image').fadeIn('slow');
  	$('#btnAction').html('Fade Out');
  	$('#btnAction').css('background','red');
  	//$('#btnAction').removeClass('fadein');
  	//$('#btnAction').addClass('fadeout');
  	$('#btnAction').toggleClass('fadeout');
  }
  else {
      $('#image').fadeOut('slow');
      $('#btnAction').html('Fade In');
      $('#btnAction').css('background','green');
    }
    $('#btnAction').toggleClass('fadein');
  });
});