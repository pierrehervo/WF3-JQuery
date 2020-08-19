$(function() {
     $('#btn1').click(function() {
     	$('#image').fadeIn('slow');
     	$('#btn1').css('background','red');
     	$('#btn1').attr('disabled',true);
     	$('#btn2').css('background','green');
     	$('#btn2').attr('disabled',false);
     });
     $('#btn2').click(function() {
     	$('#image').fadeOut('slow');
     	$('#btn1').css('background','green');
     	$('#btn1').attr('disabled',false);
     	$('#btn2').css('background','red');
     	$('#btn2').attr('disabled',true);
     });
});
