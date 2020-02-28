'use strict'; 
$(window).load( function() {	

    var today = new Date();

    // Grab the current date
    var deadline = new Date(1518998400000);
    
    // Calculate the difference in seconds between the future and current date
    var diff = deadline.getTime() / 1000 - today.getTime() / 1000;

    if (diff > 0) {
        var clock = $('.countdownClock').FlipClock(diff, {
            clockFace: 'DailyCounter',
            showSeconds: true,
            autoStart: true,
            countdown: true
        });    
    } else {
        $('.clockDiv').hide();
        $('#notice60').hide();
//        $('#ticketsTitle').text('Starting from just €179, ticket are now available for purchase');
//        $('#discounts').text('Discounts for bulk ticket purchases are also available');
    }
    
    // LIGHTBOX VIDEO
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
        
//PRELOADER
        /** Loader */
    var loader = $(".loader");
    var wHeight = $(window).height();
    var wWidth = $(window).width();
    var o = 0;

    loader.css({
        top: wHeight / 2 - 2.5,
        left: wWidth / 2 - 200
    });

    do {
        loader.animate({
            width: o
        }, 10)
        o += 3;
    } while (o <= 400)
    if (o === 402) {
        loader.animate({
            left: 0,
            width: '100%'
        })
        loader.animate({
            top: '0',
            height: '100vh'
        })
    }

    setTimeout(function() {
        $(".loader-wrapper").fadeOut('fast');
        (loader).fadeOut('fast');
    }, 2500);

    
if ($('.isotope_items').length) {

    // PORTFOLIO ISOTOPE
     var $container = $('.isotope_items');
     $container.isotope();

    $('.portfolio_filter ul li').on("click", function(){
        $(".portfolio_filter ul li").removeClass("select-cat");
        $(this).addClass("select-cat");				 
        var selector = $(this).attr('data-filter');
        $(".isotope_items").isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false,
            }
    });
        return false;
    });  
    
}
    
}); // window load end 



$(document).ready( function() {	
	
	// fix mentor heights
	['.mentor .blog-workshop', '.mentor .blog-info'].forEach(function (sel) {
	    var m = 0;
	    $(sel).each(function() {
			m = Math.max($(this).height(), m)
	    }).height(m);
	});
	
    setTimeout( function() {
        window.scrollTo(0, 0);
    }, 100);

    // WOW JS
    new WOW({ mobile: false }).init();
        
    //SMOOTH SCROLL
    $(document).on("scroll", onScroll);
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
             if ($(window).width() < 768) {
                 $('.nav-menu').slideUp();
             }
        });
            
        $(this).addClass('active');
      
        var target = this.hash,
        //menu = target;
        target = $(target);
        $('html, body').stop().animate({
            'scrollTop': target.offset().top-85
        }, 500, 'swing', function () {
            window.location.hash = target.selector;
            $(document).on("scroll", onScroll);
        });
    });
    
    function onScroll(event){
        if ($('#home').length) {     
            /*var scrollPos = $(document).scrollTop();
            $('nav ul li a').each(function () {
                var currLink = $(this);
                var refElement = $(currLink.attr("href"));

                if (!isUndefined(refElement.position())) {
                    if (refElement.position().top-90 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                        $('nav ul li a').removeClass("active");
                        currLink.addClass("active");
                    }
                    else {
                        currLink.removeClass("active");
                    }
                }
            });*/
        }              
    }
    
    
    //NAVBAR SHOW - HIDE
    $(window).scroll(function() {				
    var scroll = $(window).scrollTop();
    var homeheight = $(".home").height() -86;			

    if (scroll > homeheight ) {												
        $("nav").slideDown(100);
        } else {
        $("nav").slideUp(100);
        }
     }); 
    
    	
 // RESPONSIVE MENU
$('.responsive').on('click', function (e) {

        var nav = $("nav");
        var cls = "menu-visible";

        function updateNavContainer() {
            var visible = $('.nav-menu').css("display") == 'block';
            nav.toggleClass(cls, visible);
        }

        updateNavContainer();
        $('.nav-menu').slideToggle({           
            start: updateNavContainer,
            done: updateNavContainer
        });
    });
    
    
    // HOME PAGE HEIGHT
     function centerInit() {
        var hometext = $('.home')

        hometext.css({
            "height": $(window).height() + "px"
        });
    }
    centerInit();
    $(window).resize(centerInit);
    
    
    // HOME TYPED JS
      $(".element").typed({
        strings: ["- Socialize", "", "- Collaborate", "- Experiment" , "- Learn"],
        typeSpeed: 10,
        loop:true,
        backDelay: 2000
      });
 
    
    
    // MAGNIFIC POPUP FOR PORTFOLIO PAGE
    $('.link').magnificPopup({
        type:'image',
        gallery:{enabled:true},
        zoom:{enabled: true, duration: 300}
    });
    
       // OWL CAROUSEL GENERAL JS
    var owlcar = $('.owl-carousel');
    if (owlcar.length) {
        owlcar.each(function () {
            var $owl = $(this);
            var itemsData = $owl.data('items');
            var autoPlayData = $owl.data('autoplay');
            var paginationData = $owl.data('pagination');
            var navigationData = $owl.data('navigation');
            var stopOnHoverData = $owl.data('stop-on-hover');
            var itemsDesktopData = $owl.data('items-desktop');
            var itemsDesktopSmallData = $owl.data('items-desktop-small');
            var itemsTabletData = $owl.data('items-tablet');
            var itemsTabletSmallData = $owl.data('items-tablet-small');
            $owl.owlCarousel({
                items: itemsData
                , pagination: paginationData
                , navigation: navigationData
                , autoPlay: autoPlayData
                , stopOnHover: stopOnHoverData
                , navigationText: ["<", ">"]
                , itemsCustom: [
                    [0, 1]
                    , [500, itemsTabletSmallData]
                    , [710, itemsTabletData]
                    , [992, itemsDesktopSmallData]
                    , [1199, itemsDesktopData]
                ]
            , });
        });
    }
    
    
}); // document ready end 



/* Contact Form JS*/
(function($){
   'use strict'; 
   
   $(".contact-form").on('submit', function(e){
        e.preventDefault();
        
        var uri = $(this).attr('action');
        $("#con_submit").val('Wait...');
        var con_name = $("#con_name").val();
        var con_email = $("#con_email").val();
        var con_message = $("#con_message").val();
        
        var required = 0;
        $(".requie", this).each(function() {
            if ($(this).val() == '')
            {
                $(this).addClass('reqError');
                required += 1;
            }
            else
            {
                if ($(this).hasClass('reqError'))
                {
                    $(this).removeClass('reqError');
                    if (required > 0)
                    {
                        required -= 1;
                    }
                }
            }
        });
        if (required === 0)
        {
            $.ajax({
                type: "POST",
                url: 'mail.php',
                data: {con_name: con_name, con_email: con_email, con_message: con_message},
                success: function(data)
                {
                    $(".contact-form input, .contact-form textarea").val('');
                    $("#con_submit, .sitebtn").val('Done!');
					$("#con_submit .sitebtn").addClass("ok");
                }
            });
        }
        else
        {
            $("#con_submit, .sitebtn").val('Failed!');
        }
   });
   $(".requie").keyup(function() {
        $(this).removeClass('reqError');
    });
   
})(jQuery);

function isUndefined(value){
    // Obtain `undefined` value that's
    // guaranteed to not have been re-assigned
    var undefined = void(0);
    return value === undefined;
}
