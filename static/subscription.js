$(document).ready(function(){


/* This is for <h1> Should show one sentence at a time that changes over time.  */


	(function($){
    $.fn.extend({ 
        rotaterator: function(options) {
 
            var defaults = {
                fadeSpeed: 500,
                pauseSpeed: 100,
				child:null
            };
             
            var options = $.extend(defaults, options);
         
            return this.each(function() {
                  var o =options;
                  var obj = $(this);                
                  var items = $(obj.children(), obj);
				  items.each(function() {$(this).hide();})
				  if(!o.child){var next = $(obj).children(':first');
				  }else{var next = o.child;
				  }
				  $(next).fadeIn(o.fadeSpeed, function() {
						$(next).delay(o.pauseSpeed).fadeOut(o.fadeSpeed, function() {
							var next = $(this).next();
							if (next.length == 0){
									next = $(obj).children(':first');
							}
							$(obj).rotaterator({child : next, fadeSpeed : o.fadeSpeed, pauseSpeed : o.pauseSpeed});
						})
					});
            });
        }
    });
})(jQuery);

 $(document).ready(function() {
        $('#rotate').rotaterator({fadeSpeed:500, pauseSpeed:100});
 });

});





/* this is for the button "click for price". When you click on it, a modal should appear with the price.  */


jQuery(document).ready(function($){

// Click function for show the Modal

$(".show").on("click", function(){
  $(".mask").addClass("active");
});

// Function for close the Modal

function closeModal(){
  $(".mask").removeClass("active");
}

// Call the closeModal function on the clicks/keyboard

$(".close, .mask").on("click", function(){
  closeModal();
});

	$(document).keyup(function(e) {
 	 if (e.keyCode == 27) {
    closeModal();
 	 }
	});

});

function myFunction() {
    document.getElementById("gallerylist").style.display = "block";
}

function myFunction2() {
	document.getElementById("gallerylist").style.display = "none";
}
