/*
	konamicode.js

	author: Hiram E. Pérez || @driverInside

*/
$(document).ready(function(){
	/* keyboard events
	****************** */
	// konamiCode regular expresion
	var reKC = /38384040373937399897/; // up,up,down,down,left,right,left,right,b,a.
	//konami code string.
	var kc = ""; 

	// this = document
	$(this).keypress(function(event){ 
		// charCode for letters, keyCode for cursor.
		kc += event.charCode || event.keyCode;
		// if konamicode!!!!!!!!!!!!!!!!!!!!!!
		if(reKC.test(kc)){
			// the magic happens here
			alert('konamicode activated!!! /Ö\\');
			// clear the kc string.
			kc = "";
		}
	}); 
});