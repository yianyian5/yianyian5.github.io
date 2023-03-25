/*!
 * main.singlePost.js
 */
 
 



$( ".articleImages" ).promise().done(function() { // when article images have loaded...
	
	$(".articleWords").trigger("sticky_kit:recalc"); // recalc sticky elements
	
	setTimeout(function(){ // wait 1s
		$('span.imageCaption').addClass("fade"); // fade in image captions
    }, 1000);	

}); 








$('.articleImagesWrap figure img').each(function(){ // listen for grid items loading
	
    var update = function(){ 
       
	   $(this).next("figcaption span.imageCaption").css("opacity","1"); // fadeIn item meta (title etc)  
		              
    };

    // use event capturing to update progressively.
    this.addEventListener('load', update, true);
    
});



/*
// Testing media queries with jQuery
// Using matchMedia
// By Ravenous - July, 2014

$(document).ready(function(){
  
// We need to turn it into a function.
// To apply the changes both on document ready and when we resize the browser.
  
	var ravenous = function() { 
	
		// Set the matchMedia
	
		if (window.matchMedia('(max-width: 900px)').matches){ 
	
		  
		} else {
	
		
		}
	};

  // Set the function to resize
  $(window).resize(ravenous);
  // Call the function
  ravenous();  
});
*/







jQuery(window).load(function(){


    var window_width = jQuery( window ).width();

    if (window_width < 900) {
	    
      jQuery(".articleWords,.articleImagesWrap").trigger("sticky_kit:detach"); // detatch stickykit
      
      jQuery('figure#image-1').prependTo('.mobileLead'); // move first article image in set
      
    } else {
	    
      make_sticky();
      
      
    }

    jQuery( window ).resize(function() {

	

      window_width = jQuery( window ).width();

      if (window_width < 900) {
	      
        jQuery(".articleWords,.articleImagesWrap").trigger("sticky_kit:detach"); // detatch stickykit
        
        jQuery('figure#image-1').prependTo('.mobileLead'); // move first image in article set
        
        
      } else {
	      
        make_sticky();
        
        jQuery('figure#image-1.portrait').insertBefore(jQuery('figure#image-2'));
        
        jQuery('figure#image-1.landscape').prependTo('.articleImagesWrap');
        
        $(".articleWords,.articleImagesWrap").trigger("sticky_kit:recalc"); // recalc sticky elements
        
        
        
      }

    });

    function make_sticky() {
	    
      	jQuery(".articleWords,.articleImagesWrap").stick_in_parent({
			offset_top:60 // offset stick by 120px to account for header
		});
		
    }



});




// wrap images with class of portrait into a group for styling
$(function(){
    var cWrap=$('<div class="portrait-set clear"></div>');
    $('.articleImages figure.portrait').each(function(){
        var o = $(this).next('figure.portrait').length;
        $(this).replaceWith(cWrap).appendTo(cWrap);
        if (!o) cWrap=$('<div class="portrait-set clear"></div>');
    });
});





$(".articleText").addClass("fadeIn"); // fadeIn article text












