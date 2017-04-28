$(document).ready( function() {
  	$(document).foundation();



  	//$('.off-canvas-wrapper').foundation('open', event, trigger);
	//$('.off-canvas-wrapper').foundation('offcanvas', 'toggle', 'move-right');
  	//$('.off-canvas').foundation('offcanvas', 'show', 'move-right');
	//$('.off-canvas').foundation('offcanvas', 'toggle', 'move-right');	
	//$('.off-canvas-wrapper').foundation(data-content-overlay);
	//foudata-content-overlay



  	$('.off-canvas-wrapper').foundation('offcanvas', 'show', 'move-right');
	$('.off-canvas-wrapper').foundation('offcanvas', 'toggle', 'move-right');
  	$('.off-canvas').foundation('offcanvas', 'show', 'move-right');
	$('.off-canvas').foundation('offcanvas', 'toggle', 'move-right');	
	//$('.off-canvas-wrapper').foundation(data-content-overlay);
	//foudata-content-overlay
/*	var nrOfBlocks = 100;

	var gridSquareSize = $(document).width() / 7;


  var output = "";

  for (var i = 0; i < nrOfBlocks; i++) {
    output += "<div class=\"grid-block\" > <div class=\"grid-bloc-header\">asd</div> </div> ";

  }

  
  $("#cave-grid").html(output); */
});
