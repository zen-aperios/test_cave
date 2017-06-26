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

// --------- content close section ------------

$('.content-wrapper').click(function (content) {  

    $(".content-wrapper").addClass("content-toggle");

 });
/*$('.projection-wrapper').click(function (projection) {  

    $(".projection-wrapper").toggleClass("projection-toggle");

 });
*/

// --------- end content section ------------



// --------- filter section ------------

$('#project-filter').click(function (a) {  


    $(".projects-cave").toggleClass("projects-expand");
    $("#project-output").toggleClass("output-expand");

    $(".content-type-cave").removeClass("content-type-expand");
    $("#type-output").removeClass("output-expand");    

    $(".dynamic-cave").removeClass("dynamic-expand");
    $("#dynamic-output").removeClass("output-expand");    

   	/* $(".style-cave").removeClass("style-expand");
    $("#style-output").removeClass("output-expand");    

    $(".size-cave").removeClass("size-expand");
    $("#size-output").removeClass("output-expand"); */

 });
 $('#type-filter').click(function (b) {  

    $(".content-type-cave").toggleClass("content-type-expand");
    $("#type-output").toggleClass("output-expand");

    $(".dynamic-cave").removeClass("dynamic-expand");
    $("#dynamic-output").removeClass("output-expand");

    $(".projects-cave").removeClass("projects-expand");
    $("#project-output").removeClass("output-expand");


  /*  $(".size-cave").removeClass("size-expand");
    $("#size-output").removeClass("output-expand");    

    $(".sequence-cave").removeClass("sequence-expand");
    $("#sequence-output").removeClass("output-expand"); */




 }); 
 $('#dynamic-filter').click(function (c) {  

    $(".dynamic-cave").toggleClass("dynamic-expand");
    $("#dynamic-output").toggleClass("output-expand");

    $(".projects-cave").removeClass("projects-expand");
    $("#project-output").removeClass("output-expand");    

    $(".content-type-cave").removeClass("content-type-expand");
    $("#type-output").removeClass("output-expand");    



  /*  $(".sequence-cave").removeClass("sequence-expand");
    $("#sequence-output").removeClass("output-expand");

    $(".size-cave").removeClass("size-expand");
    $("#size-output").removeClass("output-expand");  */


 }); 
 $('#top-type-filter').click(function (d) {  

    //$(".top-type-cave").toggleClass("top-type-expand");
    $("#top-type-output").toggleClass("top-type-expand");
 

  /*  $(".sequence-cave").removeClass("sequence-expand");
    $("#sequence-output").removeClass("output-expand");

    $(".size-cave").removeClass("size-expand");
    $("#size-output").removeClass("output-expand");  */


 }); 
 

 /* $('#style-filter').click(function (d) {  


    $(".style-cave").toggleClass("style-expand");
    $("#style-output").toggleClass("output-expand");

    $(".projects-cave").removeClass("projects-expand");
    $("#project-output").removeClass("output-expand");

    $(".sequence-cave").removeClass("sequence-expand");
    $("#sequence-output").removeClass("output-expand");

    $(".size-cave").removeClass("size-expand");
    $("#size-output").removeClass("output-expand");


 });   
 $('#sequence-filter').click(function (e) {  


    $(".sequence-cave").toggleClass("sequence-expand");
    $("#sequence-output").toggleClass("output-expand");

    $(".style-cave").removeClass("style-expand");
    $("#style-output").removeClass("output-expand");  

    $(".projects-cave").removeClass("projects-expand");
    $("#project-output").removeClass("output-expand");    

    $(".size-cave").removeClass("size-expand");
    $("#size-output").removeClass("output-expand");


 });   
 $('#size-filter').click(function (f) {  


    $(".size-cave").toggleClass("size-expand");
    $("#size-output").toggleClass("output-expand");

    $(".sequence-cave").removeClass("sequence-expand");
    $("#sequence-output").removeClass("output-expand");    

    $(".style-cave").removeClass("style-expand");
    $("#style-output").removeClass("output-expand");   
    
   $(".projects-cave").removeClass("projects-expand");
    $("#project-output").removeClass("output-expand");    
       

 });   */    