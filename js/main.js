/***********************************************************
 *
 * Project name: 	EESOME by JAKUB CECH
 * Decription: 		Portfolio page for Jakub Cech on 3D visualisation
 * Author: 			ceosDesigns
 * Link:			http://ceosdesigns.sk/
 * Version:			1.00
 *
 ************************************************************/

/************************************************************
 *
 * -----------------
 * TABLE OF CONTENTS
 * -----------------
 *
 *  01. INITIALIZATION FUNCTIONS
 *  	01.01. GLOBAL VARIABLES
 *		01.02. PRELOADER
 *
 *	02. WHEN DOM IS READY
 *
 *  03. WHEN PAGE IS FULLY LOADED
 *
 ************************************************************/

$(function () {
	"use strict";

	/************************************************************
	 *					01. INITIALIZATION FUNCTIONS
	 ************************************************************/

	/************************************************************
	 *					01.01. VALUES
	 ************************************************************/
	var delay = 1200;
	var timeoutId;
	var animationIsFinished = false;
	var animationDelayMatrix = [0.4, 0.3, 0.2, 0.1, 0, 0.1, 0.2, 0.3, 0.4];
	var maxCurrentDelay = 0;

	var filSliderPadding = 300;

	var pwSliderVisible = false;
	var wfcSliderVisible = false;
	var cwSliderVisible = false;
	var twSliderVisible = false;

	var tLoader;

	var sectionSeed = [7, 100, 965, 0, 896, 55, 0, 216, 695, 0, 941, 1233, 0, 756, 855];

	$("body").on('click','#changeSeed',function(event){
		// NEW SEED VALUE FOR SECTION
		var newSeedValue = $("#seedValue").val();
		
		// SET NEW SEED VALUE TO DATA-SEED ATTRIBUTE OF SECTION
		$("div.section.active").attr('data-seed', newSeedValue);
		
		// GET INDEX OF CURRENT SECTION
		var secInd = $("div.section").index( $("div.section.active"));
		
		// SET NEW VALUE WITHIN SEDD ARRAY
		sectionSeed[secInd] = newSeedValue;
		
		// ALERT NEW SEED ARRAY
		alert("NEW SECTION SEED ARRAY: " + sectionSeed);
		
		// REINITIALIZE RAIN DROP EFFECT
		init_raindropEffect()
		
		// PREVENT SUBMIT OF FORM
		event.preventDefault();
	});

	/************************************************************
	 *					01.02. PRELOADER
	 ************************************************************/
	function init_preloader() {

		var tLoader;
		clearTimeout(tLoader);
		tLoader = setTimeout(function () {
			$('#preloader-content').fadeOut(500, function () {
				$('#preloader').fadeOut(500, function(){
				});
			});
		}, 1000);
	}
	
	/************************************************************
	*					01.02. POPOVER
	************************************************************/
	function init_popover() {

		$('[data-toggle="popover"]').popover();
	}

	/************************************************************
	 *					01.03. POST-LOADER
	 ************************************************************/
	function init_postloader() {

		$("a").click(function(event) {
        	//alert("As you can see, the link no longer took you to jquery.com");
          	var href = $(this).attr('href');
            //alert(href);

			if(href != undefined){
				$( "#preload" ).fadeIn( 500, function() {
					window.location = href;
				});
			}
            event.preventDefault();
        });
	}
	
	/************************************************************
	*					01.03. CAROUSELS
	************************************************************/
	function init_PWcarousel() {
		var sliderHeight = window.innerHeight - filSliderPadding;

		//var sliderHeight = window.innerHeight / 1.5;

		$("#pw-slider .slider-item").css('height', sliderHeight + 'px');
		$("#pw-slider").css('height', sliderHeight + 'px');
        $("#pw-slider .slider-item").css('width', 'auto');

		$('#pw-slider .owl-carousel').owlCarousel({
			center:true,
			loop:true,
			margin:10,
			nav:false,
			dots:false,
			autoWidth:true,
			items:3
		});
	}
	
	function init_WFCcarousel() {
		var sliderHeight = window.innerHeight - filSliderPadding;

		//var sliderHeight = window.innerHeight / 1.5;

		$("#wfc-slider .slider-item").css('height', sliderHeight + 'px');
		$("#wfc-slider").css('height', sliderHeight + 'px');
        $("#wfc-slider .slider-item").css('width', 'auto');

		$('#wfc-slider .owl-carousel').owlCarousel({
			center:true,
			loop:true,
			margin:10,
			nav:false,
			dots:false,
			autoWidth:true,
			items:3
		});
	}
	
	function init_CWcarousel() {
		var sliderHeight = window.innerHeight - filSliderPadding;

		//var sliderHeight = window.innerHeight / 1.5;

		$("#cw-slider .slider-item").css('height', sliderHeight + 'px');
		$("#cw-slider").css('height', sliderHeight + 'px');
        $("#cw-slider .slider-item").css('width', 'auto');

		$('#cw-slider .owl-carousel').owlCarousel({
			center:true,
			loop:true,
			margin:10,
			nav:false,
			dots:false,
			autoWidth:true,
			items:3
		});
	}
	
	function init_TWcarousel() {
		var sliderHeight = window.innerHeight - filSliderPadding;

		//var sliderHeight = window.innerHeight / 1.5;

		$("#tw-slider .slider-item").css('height', sliderHeight + 'px');
		$("#tw-slider").css('height', sliderHeight + 'px');
        $("#tw-slider .slider-item").css('width', 'auto');

		$('#tw-slider .owl-carousel').owlCarousel({
			center:true,
			loop:true,
			margin:10,
			nav:false,
			dots:false,
			autoWidth:true,
			items:3
		});
	}
	
	function init_fullSliders() {
		var sliderHeight = window.innerHeight;

		$("#full-slider-PW .slider-item").css('height', sliderHeight + 'px');
     	$("#full-slider-PW .slider-item").css('width', 'auto');

		$("#full-slider-WFC .slider-item").css('height', sliderHeight + 'px');
     	$("#full-slider-WFC .slider-item").css('width', 'auto');

		$("#full-slider-CW .slider-item").css('height', sliderHeight + 'px');
     	$("#full-slider-CW .slider-item").css('width', 'auto');
		
		$("#full-slider-TW .slider-item").css('height', sliderHeight + 'px');
     	$("#full-slider-TW .slider-item").css('width', 'auto');

		$('#full-slider-PW .owl-carousel').owlCarousel({
			center:true,
			loop:true,
			margin:10,
			nav:false,
			dots:false,
			autoWidth:true,
			items:3
		});
		
		$('#full-slider-WFC .owl-carousel').owlCarousel({
			center:true,
			loop:true,
			margin:10,
			nav:false,
			dots:false,
			autoWidth:true,
			items:3
		});
		
		$('#full-slider-CW .owl-carousel').owlCarousel({
			center:true,
			loop:true,
			margin:10,
			nav:false,
			dots:false,
			autoWidth:true,
			items:3
		});
		
		$('#full-slider-TW .owl-carousel').owlCarousel({
			center:true,
			loop:true,
			margin:10,
			nav:false,
			dots:false,
			autoWidth:true,
			items:3
		});
	}

	/************************************************************
	 *					01.05. RAINDROP EFFECT
	 ************************************************************/

	function init_raindropEffect() {
		// setup animation parameters for sections
		$(".section").each(function(sectionIndex){
			maxCurrentDelay = 0;
			//setup animation parameter for HEADINGs
			$(this).find("h1, .slider").css({
				opacity		: '0',
				transition 	: '1s opacity ease-in-out 0s'
			});
			/*****************************************************************************/
			/*                       HEADINGS OF MAIN SECTIONS                           */
			/*****************************************************************************/
			$("#section3 h1, #section5 h1, #section7 h1, #section9 h1").css({
				opacity		: '0',
				transition 	: '0.6s opacity ease-in-out 0s'
			});
			/*****************************************************************************/
			/*                                  BUTTONS                                  */
			/*****************************************************************************/
			$(this).find(".ebutton").css({
				opacity		: '0',
				transition 	: '0.2s all ease-in-out 0s, 1s opacity ease-in-out 0s'
			});
			/*****************************************************************************/
			/*                   HEADING + SLIDESHOW FADE&FLOAT TANDEM                   */
			/*****************************************************************************/
			$("#present0 h1, #present1 h1, #present2 h1, #present3 h1").css({
				opacity		: '0',
				transition 	: '1s all ease-in-out 0s, 1s top ease-in-out 0s'
			});

			$(this).find(".slider").css({
				opacity		: '0',
				transition 	: '0.75s all ease-in-out 0.25s, 0.75s top ease-in-out 0.25s'
			});
			/*****************************************************************************/
			/*                             SPECIFIC ITEMS                                */
			/*****************************************************************************/
			$(this).find("#download-book").css({
				opacity		: '0',
				transition 	: '0.2s all ease-in-out 0s, 0.5s opacity ease-in-out 0.5s'
			});

			$(this).find("#visit-behance").css({
				opacity		: '0',
				transition 	: '0.2s all ease-in-out 0s, 0.5s opacity ease-in-out 0.5s'
			});

			$(this).find("#create-relationship").css({
				opacity		: '0',
				transition 	: '0.2s all ease-in-out 0s, 0.5s opacity ease-in-out 0.75s'
			});


			Math.seed = sectionSeed[sectionIndex];
			//alert(sectionIndex + " : " + sectionSeed[sectionIndex]);
			
			$(this).attr('data-seed', sectionSeed[sectionIndex]);

			$(this).find("p").each(function(paragraphIndex){
				var count = $(this).find("span").size();
				var startIndex = Math.ceil((9 - count) / 2);

				var rndm = Math.seededRandom();

				rndm = 2/3 * (rndm - 0.5);

				$(this).find("span").each(function(spanIndex){
					var animationDelay = animationDelayMatrix[startIndex + spanIndex] + (0.1 * paragraphIndex) + rndm;
					if (maxCurrentDelay < animationDelay){
						maxCurrentDelay = animationDelay;
					}
					$( this ).css({
						filter     	: 'blur(10px)',
						opacity		: '0',
						transition 	: '0.6s opacity ease-in-out ' + animationDelay + 's, 0.73s filter ease-in-out ' + animationDelay + 's'
					});
				});
			});
		$(this).attr('data-delay', maxCurrentDelay);
		});
	}
	
	/************************************************************
	 *					01.06. SEED RANDOM
	 ************************************************************/

	// the initial seed
	Math.seed = 6;

	// in order to work 'Math.seed' must NOT be undefined,
	// so in any case, you HAVE to provide a Math.seed
	Math.seededRandom = function(max, min) {
		max = max || 1;
		min = min || 0;

		Math.seed = (Math.seed * 9301 + 49297) % 233280;
		var rnd = Math.seed / 233280;

		return min + rnd * (max - min);
	}

	/************************************************************
	 *					02. WHEN DOM IS READY
	 ************************************************************/
	$(document).ready(function() {

		$( ".spinner" ).animate({
    		width: '50%'
  		}, 10000, function() {
    		// Animation complete.
  		});

		$('#fullpage').fullpage({
			sectionsColor: ['#ffffff', '#fff', '#ffffff', '#fff', '#ffffff'],
			afterRender: function(){
				init_PWcarousel();
				init_WFCcarousel();
				init_CWcarousel();
				init_TWcarousel();

				init_fullSliders();
			},

			onLeave: function(index, nextIndex, direction){
				var leavingSection = $(this);

				$.fn.fullpage.setAllowScrolling(false);
				
				if(leavingSection.attr('id').includes("present")){
					//alert("PRESENATION");
					
					leavingSection.animate({
						opacity: '0'
					}, 600, function() {
						// Animation complete.
						leavingSection.find("h1").removeClass("animated0s fadeInUp");
						leavingSection.find('.slider').removeClass("animated1s fadeInUpSmall");
						leavingSection.css('opacity', 1);
					});
				}
				else{
					//alert("TEXT");
					leavingSection.find('h1, span, .ebutton').removeClass("animated");
				}

				//$("div.section").find('h1, span, .slider, .ebutton').removeClass("animated");
				$('[data-toggle="popover"]').popover('hide');
				clearTimeout(timeoutId);
				timeoutId = setTimeout(function(){
					animationIsFinished = true;
					$.fn.fullpage.moveTo(nextIndex);
					animationIsFinished = false;
				}, delay);

				return animationIsFinished;
			},

			afterLoad: function(anchorLink, index){
				var loadedSection = $(this);

				if(loadedSection.attr('id').includes("present")){
					//alert("PRESENATION");
					loadedSection.find("h1").addClass("animated0s fadeInUp");
					loadedSection.find('.slider').addClass("animated1s fadeInUpSmall");
				}
				else{
					//alert("TEXT");
					loadedSection.find('h1, span, .ebutton').addClass("animated");
				}

				//loadedSection.find('h1, span, .slider, .ebutton').addClass("animated");
				$.fn.fullpage.setAllowScrolling(true);

				$("#seedValue").val("AAA");
				$("#seedValue").val(loadedSection.attr('data-seed'));
			}
		});

		$.fn.fullpage.setScrollingSpeed(0);

		init_raindropEffect();

	});
	
	/************************************************************
	 *					03. WHEN PAGE IS FULLY LOADED
	 ************************************************************/

	$(window).on('load', function () {
		//init_preloader();
		
		init_popover();

		clearTimeout(tLoader);

		tLoader = setTimeout(function () {
			
			$( ".spinner" ).stop();
			$( ".spinner" ).animate({
    			width: '100%'
  			}, 1000, function() {
 			$.fn.fullpage.moveTo(1);
    			// Animation complete.
				$('#preload-content').fadeOut(500, function () {
	$.fn.fullpage.moveTo(1);
	$('#preload').fadeOut(500, function() {
	});
});
  			});
		}, 1000);
		
		$('body').on('click', "#submitSeed", function(event) {
     		//alert($("#seedValue").val());
			Math.seed = $("#seedValue").val();
			init_raindropEffect();
			alert("Seed zmeneny!");
		});
		
		init_postloader();

		//alert("WIDTH:" + window.innerWidth + "\nHEIGHT:" + window.innerHeight);

		/************************************************************************************/
		/*                          'PERSONAL WORKS' SLIDERS                                */
		/************************************************************************************/

		// SHOW 'PERSONAL WORKS' SLIDESHOW FULLSCREEN
		$("#pw-slider").on('click', ".mainSliderGoFull", function(event) {
			$('#full-slider-PW').fadeIn(1000);

			pwSliderVisible = true;

			// DISABLE SCROLLING OF MAIN CONTENT BY MOUSE
			$.fn.fullpage.setAllowScrolling(false);

			// DISABLE SCROLLING OF MAIN CONTENT BY KEYBOARD
			$.fn.fullpage.setKeyboardScrolling(false);
		});
		
		$("#pw-slider .mobileOverlay").on('click', ".ebutton2", function(event) {
			$('#full-slider-PW').fadeIn(1000);

			pwSliderVisible = true;

			// DISABLE SCROLLING OF MAIN CONTENT BY MOUSE
			$.fn.fullpage.setAllowScrolling(false);

			// DISABLE SCROLLING OF MAIN CONTENT BY KEYBOARD
			$.fn.fullpage.setKeyboardScrolling(false);
		});

		// HIDE 'PERSONAL WORKS' SLIDESHOW FULLSCREEN
		$("#full-slider-PW").on('click', ".mainSliderHideFull", function(event) {
			$('#full-slider-PW').fadeOut(1000);

			pwSliderVisible = false;

			// ENABLE SCROLLING OF MAIN CONTENT BY MOUSE
			$.fn.fullpage.setAllowScrolling(true);

			// ENABLE SCROLLING OF MAIN CONTENT BY KEYBOARD
			$.fn.fullpage.setKeyboardScrolling(true);
		});

		// SYNCHRONIZE 'PERSONAL WORKS' SLIDERS
		$('#pw-slider .owl-carousel').on('changed.owl.carousel', function(event) {
			$("#full-slider-PW .slider-item").trigger('to.owl.carousel', event.item.index);
		});

		// SYNCHRONIZE 'PERSONAL WORKS' SLIDERS
		$('#full-slider-PW .owl-carousel').on('changed.owl.carousel', function(event) {
			$("#pw-slider .slider-item").trigger('to.owl.carousel', event.item.index);
		});

		// LISTEN ON KEYS 'LEFT' AND 'RIGHT' FOR PREV/NEXT
		$("body").keyup(function (event) {    
			if(pwSliderVisible) {
				if(event.keyCode == 37){
					$('#full-slider-PW .owl-carousel').trigger('prev.owl.carousel', [300]);
				}
				if(event.keyCode == 39){
					$('#full-slider-PW .owl-carousel').trigger('next.owl.carousel', [300]);
				}
			}
		});

		/************************************************************************************/
		/*                        'WORK FROM COLLECTION' SLIDERS                            */
		/************************************************************************************/

		// SHOW 'WORK FROM COLLECTION' SLIDESHOW FULLSCREEN
		$("#wfc-slider").on('click', ".mainSliderGoFull", function(event) {
			$('#full-slider-WFC').fadeIn(1000);

			wfcSliderVisible = true;

			// DISABLE SCROLLING OF MAIN CONTENT BY MOUSE
			$.fn.fullpage.setAllowScrolling(false);

			// DISABLE SCROLLING OF MAIN CONTENT BY KEYBOARD
			$.fn.fullpage.setKeyboardScrolling(false);
		});
		
		$("#wfc-slider .mobileOverlay").on('click', ".ebutton2", function(event) {
			$('#full-slider-WFC').fadeIn(1000);

			wfcSliderVisible = true;

			// DISABLE SCROLLING OF MAIN CONTENT BY MOUSE
			$.fn.fullpage.setAllowScrolling(false);

			// DISABLE SCROLLING OF MAIN CONTENT BY KEYBOARD
			$.fn.fullpage.setKeyboardScrolling(false);
		});

		// HIDE 'WORK FROM COLLECTION' SLIDESHOW FULLSCREEN
		$("#full-slider-WFC").on('click', ".mainSliderHideFull", function(event) {
			$('#full-slider-WFC').fadeOut(1000);

			wfcSliderVisible = false;

			// ENABLE SCROLLING OF MAIN CONTENT BY MOUSE
			$.fn.fullpage.setAllowScrolling(true);

			// ENABLE SCROLLING OF MAIN CONTENT BY KEYBOARD
			$.fn.fullpage.setKeyboardScrolling(true);
		});

		// SYNCHRONIZE 'WORK FROM COLLECTION' SLIDERS
		$('#wfc-slider .owl-carousel').on('changed.owl.carousel', function(event) {
			$("#full-slider-WFC .slider-item").trigger('to.owl.carousel', event.item.index);
		});

		// SYNCHRONIZE 'WORK FROM COLLECTION' SLIDERS
		$('#full-slider-WFC .owl-carousel').on('changed.owl.carousel', function(event) {
			$("#wfc-slider .slider-item").trigger('to.owl.carousel', event.item.index);
		});

		// LISTEN ON KEYS 'LEFT' AND 'RIGHT' FOR PREV/NEXT
		$("body").keyup(function (event) {    
			if(wfcSliderVisible) {
				if(event.keyCode == 37){
					$('#full-slider-WFC .owl-carousel').trigger('prev.owl.carousel', [300]);
				}
				if(event.keyCode == 39){
					$('#full-slider-WFC .owl-carousel').trigger('next.owl.carousel', [300]);
				}
			}
		});
		
		/************************************************************************************/
		/*                          'COMMERCIAL WORK' SLIDERS                               */
		/************************************************************************************/

		// SHOW 'COMMERCIAL WORKS' SLIDESHOW FULLSCREEN
		$("#cw-slider").on('click', ".mainSliderGoFull", function(event) {
			$('#full-slider-CW').fadeIn(1000);

			cwSliderVisible = true;

			// DISABLE SCROLLING OF MAIN CONTENT BY MOUSE
			$.fn.fullpage.setAllowScrolling(false);

			// DISABLE SCROLLING OF MAIN CONTENT BY KEYBOARD
			$.fn.fullpage.setKeyboardScrolling(false);
		});
		
		$("#cw-slider .mobileOverlay").on('click', ".ebutton2", function(event) {
			$('#full-slider-CW').fadeIn(1000);

			cwSliderVisible = true;

			// DISABLE SCROLLING OF MAIN CONTENT BY MOUSE
			$.fn.fullpage.setAllowScrolling(false);

			// DISABLE SCROLLING OF MAIN CONTENT BY KEYBOARD
			$.fn.fullpage.setKeyboardScrolling(false);
		});

		// HIDE 'COMMERCIAL WORKS' SLIDESHOW FULLSCREEN
		$("#full-slider-CW").on('click', ".mainSliderHideFull", function(event) {
			$('#full-slider-CW').fadeOut(1000);

			cwSliderVisible = false;

			// ENABLE SCROLLING OF MAIN CONTENT BY MOUSE
			$.fn.fullpage.setAllowScrolling(true);

			// ENABLE SCROLLING OF MAIN CONTENT BY KEYBOARD
			$.fn.fullpage.setKeyboardScrolling(true);
		});

		// SYNCHRONIZE 'COMMERCIAL WORKS' SLIDERS
		$('#cw-slider .owl-carousel').on('changed.owl.carousel', function(event) {
			$("#full-slider-CW .slider-item").trigger('to.owl.carousel', event.item.index);
		});

		// SYNCHRONIZE 'COMMERCIAL WORKS' SLIDERS
		$('#full-slider-CW .owl-carousel').on('changed.owl.carousel', function(event) {
			$("#cw-slider .slider-item").trigger('to.owl.carousel', event.item.index);
		});

		// LISTEN ON KEYS 'LEFT' AND 'RIGHT' FOR PREV/NEXT
		$("body").keyup(function (event) {    
			if(cwSliderVisible) {
				if(event.keyCode == 37){
					$('#full-slider-CW .owl-carousel').trigger('prev.owl.carousel', [300]);
				}
				if(event.keyCode == 39){
					$('#full-slider-CW .owl-carousel').trigger('next.owl.carousel', [300]);
				}
			}
		});
		
		/************************************************************************************/
		/*                          'TECHNICAL WORK' SLIDERS                               */
		/************************************************************************************/

		// SHOW 'TECHNICAL WORKS' SLIDESHOW FULLSCREEN
		$("#tw-slider").on('click', ".mainSliderGoFull", function(event) {
			$('#full-slider-TW').fadeIn(1000);

			twSliderVisible = true;

			// DISABLE SCROLLING OF MAIN CONTENT BY MOUSE
			$.fn.fullpage.setAllowScrolling(false);

			// DISABLE SCROLLING OF MAIN CONTENT BY KEYBOARD
			$.fn.fullpage.setKeyboardScrolling(false);
		});
		
		$("#tw-slider .mobileOverlay").on('click', ".ebutton2", function(event) {
			$('#full-slider-TW').fadeIn(1000);

			twSliderVisible = true;

			// DISABLE SCROLLING OF MAIN CONTENT BY MOUSE
			$.fn.fullpage.setAllowScrolling(false);

			// DISABLE SCROLLING OF MAIN CONTENT BY KEYBOARD
			$.fn.fullpage.setKeyboardScrolling(false);
		});

		// HIDE 'TECHNICAL WORKS' SLIDESHOW FULLSCREEN
		$("#full-slider-TW").on('click', ".mainSliderHideFull", function(event) {
			$('#full-slider-TW').fadeOut(1000);

			twSliderVisible = false;

			// ENABLE SCROLLING OF MAIN CONTENT BY MOUSE
			$.fn.fullpage.setAllowScrolling(true);

			// ENABLE SCROLLING OF MAIN CONTENT BY KEYBOARD
			$.fn.fullpage.setKeyboardScrolling(true);
		});

		// SYNCHRONIZE 'TECHNICAL WORKS' SLIDERS
		$('#tw-slider .owl-carousel').on('changed.owl.carousel', function(event) {
			$("#full-slider-TW .slider-item").trigger('to.owl.carousel', event.item.index);
		});

		// SYNCHRONIZE 'TECHNICAL WORKS' SLIDERS
		$('#full-slider-TW .owl-carousel').on('changed.owl.carousel', function(event) {
			$("#tw-slider .slider-item").trigger('to.owl.carousel', event.item.index);
		});

		// LISTEN ON KEYS 'LEFT' AND 'RIGHT' FOR PREV/NEXT
		$("body").keyup(function (event) {    
			if(twSliderVisible) {
				if(event.keyCode == 37){
					$('#full-slider-TW .owl-carousel').trigger('prev.owl.carousel', [300]);
				}
				if(event.keyCode == 39){
					$('#full-slider-TW .owl-carousel').trigger('next.owl.carousel', [300]);
				}
			}
		});
	});
	
	$(window).on('resize', function () {
		// Do something.
		init_PWcarousel();
		init_WFCcarousel();
		init_CWcarousel();
		init_TWcarousel();

		init_fullSliders();
	});
});