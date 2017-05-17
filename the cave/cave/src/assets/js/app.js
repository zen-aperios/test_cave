$(document).foundation();

	/* $(document).ready( function() {
	  	$(document).foundation();
		var nrOfBlocks = 100;

		var gridSquareSize = $(document).width() / 7;


	  var output = "";

	  for (var i = 0; i < nrOfBlocks; i++) {
	    output += "<div class=\"grid-block\" > <div class=\"grid-bloc-header\">asd</div> </div> ";

	  }

	  
	  $("#cave-grid").html(output); 
	}); */




// --------- Part - 3 ------------

$('#project-filter').click(function (a) {  


    $(".projects-cave").toggleClass("projects-expand");
    $("#project-output").toggleClass("output-expand");

   	$(".style-cave").removeClass("style-expand");
    $("#style-output").removeClass("output-expand");    

    $(".sequence-cave").removeClass("sequence-expand");
    $("#sequence-output").removeClass("output-expand");

    $(".size-cave").removeClass("size-expand");
    $("#size-output").removeClass("output-expand");

 });
 $('#style-filter').click(function (b) {  


    $(".style-cave").toggleClass("style-expand");
    $("#style-output").toggleClass("output-expand");

    $(".projects-cave").removeClass("projects-expand");
    $("#project-output").removeClass("output-expand");

    $(".sequence-cave").removeClass("sequence-expand");
    $("#sequence-output").removeClass("output-expand");

    $(".size-cave").removeClass("size-expand");
    $("#size-output").removeClass("output-expand");


 });   
 $('#sequence-filter').click(function (c) {  


    $(".sequence-cave").toggleClass("sequence-expand");
    $("#sequence-output").toggleClass("output-expand");

    $(".style-cave").removeClass("style-expand");
    $("#style-output").removeClass("output-expand");  

    $(".projects-cave").removeClass("projects-expand");
    $("#project-output").removeClass("output-expand");    

    $(".size-cave").removeClass("size-expand");
    $("#size-output").removeClass("output-expand");


 });   
 $('#size-filter').click(function (d) {  


    $(".size-cave").toggleClass("size-expand");
    $("#size-output").toggleClass("output-expand");

    $(".sequence-cave").removeClass("sequence-expand");
    $("#sequence-output").removeClass("output-expand");    

    $(".style-cave").removeClass("style-expand");
    $("#style-output").removeClass("output-expand");   
    
   $(".projects-cave").removeClass("projects-expand");
    $("#project-output").removeClass("output-expand");    
       

 });      