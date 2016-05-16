(function($){

	"use strict";

/* ==========================================================================
   When document is ready, do
   ========================================================================== */
   
	$(document).ready(function(){

		// sticky header
		// http://imakewebthings.com/jquery-waypoints/shortcuts/sticky-elements/	
	
		var stickyHeader = false;
		
		if ($('body').hasClass('ewf-sticky-header')){
			stickyHeader = true;
		}
		
		if((typeof $.fn.waypoint != 'undefined') && stickyHeader && ($(window).width() > 1024)){ 
		
			$('#header').waypoint('sticky', {
			  wrapper: '<div class="sticky-wrapper" />',
			  stuckClass: 'stuck',
			  offset: -1
			});

		}
		
		if(typeof twitterFetcher != 'undefined' && $('.ewf_widget_latest_tweets').length){
			
			$('.ewf_widget_latest_tweets').each(function(index){
				var account_id = $('.ewf-tweet-list', this).attr('data-account-id');
				var items = $('.ewf-tweet-list', this).attr('data-items');
				var newID = 'ewf-tweet-list-'+index;
				
				$('.ewf-tweet-list', this).attr('id', newID);
				twitterFetcher.fetch(account_id, newID, items, false, false, false);
			});
			
		}
		
		// simplePlaceholder - polyfill for mimicking the HTML5 placeholder attribute using jQuery
		// https://github.com/marcgg/Simple-Placeholder/blob/master/README.md
		
		if(typeof $.fn.simplePlaceholder != 'undefined'){
			
			$('input[placeholder], textarea[placeholder]').simplePlaceholder();
		
		}
		
		// Superfish - enhance pure CSS drop-down menus
		// http://users.tpg.com.au/j_birch/plugins/superfish/options/
		
		if(typeof $.fn.superfish != 'undefined'){
			
			$('#menu').superfish({
				delay: 100,
				animation: {opacity:'show',height:'show'},
				speed: 500,
				cssArrows: false
			});
			
		}
		
		// bxSlider - responsive slider
		// http://bxslider.com/options
		
		if(typeof $.fn.bxSlider != 'undefined'){
			
			$('#bxslider .slides').bxSlider({
				 mode: 'fade',
				 speed: 500,
				 useCSS:false, 							// fix bug with Jquery 2.1 and mode Horizontal
				 slideMargin: 0,
				 infiniteLoop: true,
				 hideControlOnEnd: false,
				 adaptiveHeight: false,
				 adaptiveHeightSpeed: 500,
				 video: false,
				 pager: true,
				 pagerType: 'full' ,
				 controls: false,
				 auto: true,
				 pause: 4000,
				 autoHover: true
			});
			
			// Testimonial slider
			
			$('.testimonial-slider .slides').bxSlider({
				 mode: 'horizontal',
				 speed: 500,
				 useCSS:false, 							// fix bug with Jquery 2.1 and mode Horizontal
				 slideMargin: 0,
				 infiniteLoop: true,
				 hideControlOnEnd: false,
				 adaptiveHeight: false,
				 adaptiveHeightSpeed: 500,
				 video: false,
				 pager: true,
				 pagerType: 'full' ,
				 controls: false,
				 auto: true,
				 pause: 4000,
				 autoHover: true
			});
			
			// Portfolio items slider
			
			$('#portfolio-items-slider .slides').bxSlider({
				 mode: 'fade',
				 speed: 500,
				 useCSS:false, 							// fix bug with Jquery 2.1 and mode Horizontal
				 slideMargin: 0,
				 infiniteLoop: true,
				 hideControlOnEnd: false,
				 adaptiveHeight: false,
				 adaptiveHeightSpeed: 500,
				 video: false,
				 pager: true,
				 pagerType: 'full' ,
				 controls: false, 
				 auto: true,
				 pause: 4000,
				 autoHover: true
			});
			
			// Portfolio images slider
			
			$('#portfolio-images-slider .slides').bxSlider({
				 mode: 'fade',
				 speed: 500,
				 useCSS:false, 							// fix bug with Jquery 2.1 and mode Horizontal
				 slideMargin: 0,
				 infiniteLoop: true,
				 hideControlOnEnd: false,
				 adaptiveHeight: false,
				 adaptiveHeightSpeed: 500,
				 video: false,
				 pager: true,
				 pagerType: 'full' ,
				 controls: true, 
				 auto: true,
				 pause: 4000,
				 autoHover: true,
				 pagerCustom: '#bx-pager'
			});
			
		}
				
		// Magnific PopUp - responsive lightbox
		// http://dimsemenov.com/plugins/magnific-popup/documentation.html
		
		if(typeof $.fn.magnificPopup != 'undefined'){
		
			$('.magnificPopup').magnificPopup({
				disableOn: 400,
				closeOnContentClick: true,
				type: 'image'
			});
			
			$('.magnificPopup-gallery').magnificPopup({
				disableOn: 400,
				type: 'image',
				gallery: {
					enabled: true
				}
			});
		
		}
		
		// gMap -  embed Google Maps into your website; uses Google Maps v3
		// http://labs.mario.ec/jquery-gmap/
		
		if(typeof $.fn.gMap != 'undefined'){
		
			$(".google-map").each(function() {
				
				var $t = $(this);
				
				var mapZoom = parseInt($t.attr("data-zoom"));
				var mapAddress = $t.attr("data-address");
				var mapCaption = $t.attr("data-caption");
				
				$t.gMap({
					maptype: 'ROADMAP',
					scrollwheel: false,
					zoom: mapZoom,
					markers: [{
							address: mapAddress,
							html: mapCaption,
							popup: false
						}
					]
				});
		
			});
			
		}
		
		// Isotope
		// http://isotope.metafizzy.co/beta/
		
		if (typeof $.fn.isotope != 'undefined') {
			
			$('.portfolio-items').imagesLoaded( function() {
			
				var container = $('.portfolio-items');
					
				container.isotope({
					itemSelector: '.item',
					layoutMode: 'masonry'
				});
		
				$('.portfolio-filter li a').click(function () {
					$('.portfolio-filter li a').removeClass('active');
					$(this).addClass('active');
		
					var selector = $(this).attr('data-filter');
					container.isotope({
						filter: selector
					});
		
					return false;
				});
		
				$(window).resize(function () {
		
					container.isotope({ });
				
				});
			
			});
			
		}
		
		//

	});
	
/* ==========================================================================
   When the window is scrolled, do
   ========================================================================== */
   	
	$(window).scroll(function () {
							   
		
		
	});

})(window.jQuery);

// non jQuery plugins below