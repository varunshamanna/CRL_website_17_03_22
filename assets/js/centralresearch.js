jQuery(document).ready(function(){

	
	const humbargerBtn = jQuery('.humbergarBtn');
	
	humbargerBtn.click(function(){

		jQuery('.sitenav').toggleClass('addSlide');

		jQuery(this).toggleClass('close');


	});

$(document).on("scroll",function(){
        if($(document).scrollTop()>150){
            $("header").addClass('sticky');      
            $("header").removeClass('site-header');      
        } else{
            $("header").removeClass('sticky');
            $("header").addClass('site-header');
            
        }
    });

    	$('.row-videoWrap.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        smartSpeed:3000,
        responsiveClass:true,
        animateOut: 'fadeOut',
        responsive:{
            0:{
                items:1,
                nav:true
            }
        }
    });
      $('.row-reach.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        smartSpeed:3000,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            }
        }
    });
      $('.row-proooo.owl-carousel').owlCarousel({
        loop:true,
        autoplay:false,
        smartSpeed:3000,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
             768:{
                items:2,
                nav:true
            },
            1200:{
                items:3,
                nav:true
            }
        }
    });

              $('.row-service.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        smartSpeed:3000,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
             768:{
                items:2,
                nav:true
            },
            1200:{
                items:4,
                nav:true
            }
        }
    });

       $('#ullist li').on('click',function(){

            $('#ullist li').removeClass('ui-state-active');
            $(this).addClass('ui-state-active');
            
         });


       $(".bondingWrap a").click(function() {
        // This prevents the default 'jump to' behaviour if JavaScript is enabled,
        // whilst keeping the functionality there for when JavaScript isn't enabled
       // event.preventDefault();
    
        $("html, body").animate({ scrollTop: $($(this).attr('href')).offset().top - 120 }, 500);
        
        $('.bondingWrap a').removeClass('active');
        $(this).addClass('active');
        return true;
    });

       $(".hairextensionWrpUl a").click(function() {
        // This prevents the default 'jump to' behaviour if JavaScript is enabled,
        // whilst keeping the functionality there for when JavaScript isn't enabled
       // event.preventDefault();
    
        $("html, body").animate({ scrollTop: $($(this).attr('href')).offset().top - 120 }, 500);
        
        $('.hairextensionWrpUl a').removeClass('active');
        $(this).addClass('active');
        return true;
    });

        $('body').on('keyup', '.js-input-mobile', function () {
            var $input = $(this),
            value = $input.val(),
            length = value.length,
            inputCharacter = parseInt(value.slice(-1));

         if (!((length > 0 && inputCharacter >= 0 && inputCharacter <= 10) || (length === 1 && inputCharacter >= 7 && inputCharacter <= 10))) {
            $input.val(value.substring(0, length - 1));
         }
      });


        
        /// Gallery image hover
        $( ".img-wrapper" ).hover(
          function() {
            $(this).find(".img-overlay").animate({opacity: 1}, 600);
          }, function() {
            $(this).find(".img-overlay").animate({opacity: 0}, 600);
          }
        );

        // Lightbox
        var $overlay = $('<div id="overlay"></div>');
        var $image = $("<img>");
        var $prevButton = $('<div id="prevButton"><i class="fa fa-chevron-left"></i></div>');
        var $nextButton = $('<div id="nextButton"><i class="fa fa-chevron-right"></i></div>');
        var $exitButton = $('<div id="exitButton"><i class="fa fa-times"></i></div>');

        // Add overlay
        $overlay.append($image).prepend($prevButton).append($nextButton).append($exitButton);
        $("#gallery").append($overlay);

        // Hide overlay on default
        $overlay.hide();

        // When an image is clicked
        $(".img-overlay").click(function(event) {
          // Prevents default behavior
          event.preventDefault();
          // Adds href attribute to variable
          var imageLocation = $(this).prev().attr("href");
          // Add the image src to $image
          $image.attr("src", imageLocation);
          // Fade in the overlay
          $overlay.fadeIn("slow");
        });

        // When the overlay is clicked
        $overlay.click(function() {
          // Fade out the overlay
          $(this).fadeOut("slow");
        });

        // When next button is clicked
        $nextButton.click(function(event) {
          // Hide the current image
          $("#overlay img").hide();
          // Overlay image location
          var $currentImgSrc = $("#overlay img").attr("src");
          // Image with matching location of the overlay image
          var $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');
          // Finds the next image
          var $nextImg = $($currentImg.closest(".image").next().find("img"));
          // All of the images in the gallery
          var $images = $("#image-gallery img");
          // If there is a next image
          if ($nextImg.length > 0) { 
            // Fade in the next image
            $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
          } else {
            // Otherwise fade in the first image
            $("#overlay img").attr("src", $($images[0]).attr("src")).fadeIn(800);
          }
          // Prevents overlay from being hidden
          event.stopPropagation();
        });

        // When previous button is clicked
        $prevButton.click(function(event) {
          // Hide the current image
          $("#overlay img").hide();
          // Overlay image location
          var $currentImgSrc = $("#overlay img").attr("src");
          // Image with matching location of the overlay image
          var $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');
          // Finds the next image
          var $nextImg = $($currentImg.closest(".image").prev().find("img"));
          // Fade in the next image
          $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
          // Prevents overlay from being hidden
          event.stopPropagation();
        });

        // When the exit button is clicked
        $exitButton.click(function() {
          // Fade out the overlay
          $("#overlay").fadeOut("slow");
        });



      $('.row-course.owl-carousel').owlCarousel({
        loop:true,
        autoplay:false,
        smartSpeed:1000,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            }
        }
    });
$('.accordion-2a, .accordion-2b, .accordion-3').on('show.bs.collapse', function(n){
  $(n.target).siblings('.panel-heading').find('.panel-title i').toggleClass('fa-minus fa-plus');
});
$('.accordion-2a, .accordion-2b, .accordion-3').on('hide.bs.collapse', function(n){
  $(n.target).siblings('.panel-heading').find('.panel-title i').toggleClass('fa-plus fa-minus');
});
          var a = 0;
    $(window).scroll(function () {
        var oTop = $('#counter').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            $('.counter-value').each(function () {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                }, {
                    duration: 3000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                        //alert('finished');
                    }
                });
            });
            a = 1;
        }
    });

    (function(){


    const cirClePointerHv = $('.circlePointer');
    cirClePointerHv.each(function(){
      $(this).click(function(){

        cirClePointerHv.removeClass('active');
        $(this).addClass('active');

        const thisAttr = $(this).attr('id');
        /*console.log(thisAttr);*/

        const disvrText = $('.progfill');

        disvrText.each(function(){
          const dsvrTestAttr = $(this).attr('id');
          console.log(dsvrTestAttr);

          if(thisAttr == dsvrTestAttr){
            $(this).addClass('active');
          }else{
            $(this).removeClass('active');
          }

        }); 


      });
    });

    const crltext =$('.crltext a');

    crltext.each(function(){
      $(this).click(function(){
        crltext.removeClass("active");
        $(this).addClass('active');
      });
    });
    })();

wow = new WOW({
        animateClass: 'animated',
        mobile: false,
        offset: 100
    });
    wow.init();

});


/*setTimeout( () => {
  console.log("2");
},3000)

setInterval(() =>{
  console.log("2");
},3000)*/