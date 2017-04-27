$(document).ready( function() {
  	$(document).foundation();
	var nrOfBlocks = 100;

	var gridSquareSize = $(document).width() / 7;


  var output = "";

  for (var i = 0; i < nrOfBlocks; i++) {
    output += "<div class=\"grid-block\" > " + i + "</div> ";

  }

  
  $("#cave-grid").html(output);
});