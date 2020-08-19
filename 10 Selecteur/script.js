$(function(){
			$(' .rouge li:even ').css('color','red');
			$(' li:odd ').css('color','blue');
			$('.bleu li:first-child').css('color','green');
		});
$(function(){
	$('.rouge').fadeOut('slow').fadeIn('slow');
});
var count = $('li').length;
$('#para').html('nombre de li'+ count);