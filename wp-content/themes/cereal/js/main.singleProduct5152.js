/*!
 * main.singleProduct.js
 */
 
 
 $( window ).load(function() { // stick article text


$(".entry-summary_, .images_").stick_in_parent({
	offset_top:60 // offset stick by 120px to account for header
})
/*
.on("sticky_kit:stick", function(e) {
    
  })
  .on("sticky_kit:unbottom", function(e) {
  
  });
*/
  
});  


$( ".images" ).promise().done(function() { // when article images have loaded...
	
	$(".entry-summary").trigger("sticky_kit:recalc"); // recalc sticky elements
	
	setTimeout(function(){ // wait 1s
		$('span.imageCaption').addClass("fade"); // fade in image captions
    }, 1000);	

}); 




// $( "div[itemprop=offers]" ).insertBefore( $( ".single_add_to_cart_button" ) ); // move price inside FORM

$( ".articleSubtitle" ).insertAfter( $( "h1.product_title" ) ); // move product subtitle to underneath main title


$(".images a > img").unwrap(); // remove links from shop images




// product description and table of contents
        
$(".tableContents h2").on("click",function(){ // when clicking 'table of content' title

	//$(this).css('cursor','default'); // reset cursor
	   
	$('.tableContents h2 .openTable').toggleClass('rotate'); // fadeOut chevron down
	   
	$(".tableContents .tableContentsWrap").slideToggle("300", function () { // fadeIn table of content
	     $(".entry-summary, .images").trigger("sticky_kit:recalc"); // recalc sticky elements
	     
	});   
	
	$(".shippingInfo .shippingInfoWrap").slideUp("300", function () { // close shipping info
	     $(".entry-summary, .images").trigger("sticky_kit:recalc"); // recalc sticky elements
	     $('.shippingInfo h2 .openTable').removeClass('rotate'); // spin chevron 
	});
	
  
});

// shipping + info
        
$(".shippingInfo h2").on("click",function(){ // when clicking 'shipping + info' title

	//$(this).css('cursor','default'); // reset cursor
	   
	$('.shippingInfo h2 .openTable').toggleClass('rotate'); // spin chevron 
	   
	$(".shippingInfo .shippingInfoWrap").slideToggle("300", function () { // fadeIn shipping + info text
	     $(".entry-summary, .images").trigger("sticky_kit:recalc"); // recalc sticky elements
	     
	     
	});
	
	$(".tableContents .tableContentsWrap").slideUp("300", function () { // close tabe of contents
	     $(".entry-summary, .images").trigger("sticky_kit:recalc"); // recalc sticky elements
	     $('.tableContents h2 .openTable').removeClass('rotate'); // fadeOut chevron down
	});   
	 
  
});
     
     
$(document).ready(function () { 
     
	// product variation selected callback
	$( ".variations_form" ).on( "woocommerce_variation_select_change", function () {
	    // Fires whenever variation selects are changed
	
	
	    
	}); 
	
	$( ".single_variation_wrap" ).on( "show_variation", function ( event, variation ) {
	    // Fired when the user selects all the required dropdowns / attributes
	    // and a final variation is selected / shown
	       
		if( $(".summary .variations_form select").val()  == '') {
			$(".summary p.price").html(originalPrice);
		} else if ( $(".summary .variations_form .woocommerce-Price-amount").length ) {
			var variationPrice = $(".summary .variations_form .woocommerce-Price-amount").text();
			$(".summary p.price").text(variationPrice);
		}  
	   
	} );
	
	if( $(".summary .variations_form select").val()  == '') {
		$(".summary p.price").html(originalPrice);
	} else if ( $(".summary .variations_form .woocommerce-Price-amount").length ) {
		var variationPrice = $(".summary .variations_form .woocommerce-Price-amount").text();
		$(".summary p.price").text(variationPrice);
	}   
	
	var originalPrice = $(".summary p.price").html();
	
	
	
	$(".single_add_to_cart_button").on("click",function(){ // when clicking 'add to bag'
		
		$(this).addClass('loading');   
		
		$('.cereal-mini-cart-product-empty').text('Adding item to your bag'); // 
		     
	});	



		
});







jQuery(window).load(function(){


    var window_width = jQuery( window ).width();

    if (window_width < 900) {
	    
      jQuery(".entry-summary, .images").trigger("sticky_kit:detach"); // detatch stickykit
      
      jQuery('div#image-1').prependTo('.mobileLead'); // move first article image in set
      
    } else {
	    
      make_sticky();
      
      
    }

    jQuery( window ).resize(function() {

	

      window_width = jQuery( window ).width();

      if (window_width < 900) {
	      
        jQuery(".entry-summary, .images").trigger("sticky_kit:detach"); // detatch stickykit
        
        jQuery('div#image-1').prependTo('.mobileLead'); // move first image in article set
        
        
      } else {
	      
        make_sticky();
        
        jQuery('div#image-1').prependTo(jQuery('.woocommerce-product-gallery__wrapper'));
        
//        jQuery('div#image-1').prependTo('.images');
        
        $(".entry-summary, .images").trigger("sticky_kit:recalc"); // recalc sticky elements
        
        
        
      }

    });

    function make_sticky() {
	    
      	jQuery(".entry-summary, .images").stick_in_parent({
			offset_top:60 // offset stick by 120px to account for header
		});
		
    }



});
