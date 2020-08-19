
$( function() {
    $( "#box1 p" ).draggable({
      snap: true,
      containment: ".flex" // Limiter la zone de drop
    });
    $( "#box2" ).droppable({
      revert: true,

    });
  
});
$('#box2').on('drop', function(even, ui){
    $(this).append(ui.draggable[0]);
    $(ui.draggable[0]).css('left', 0).css('top','auto');
    $(ui.draggable[0]).addClass('move');
  }); 


/*SENS INVERSE*/
$( function() {
    $( "#box2 p" ).draggable({
      snap: true,
      containment: ".flex" // Limiter la zone de drop
    });
    $( "#box1" ).droppable({
      revert: true,

    });
  
});

$('#box1').on('drop', function(even, ui){
    $(this).append(ui.draggable[0]);
    $(ui.draggable[0]).css('left', 0).css('top','auto');
    $(ui.draggable[0]).removeClass('move');
  }); 
