/***********************************************************
 *
 * Project name: 	Portfilio by I Alex Haus
 * Decription: 		Portfolio page for JAlexander Khaustov
 * Author: 			IAlex.Haus
 * Link:			http://ialex.haus/
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
 *  	01.01. VALUES
 *      01.02. PRELOADER
 *
 *  02. WHEN PAGE IS FULLY LOADED
 *		02.01. XXX
 *		
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
	function init_values() {
		
		var windowHeight = window.innerHeight;
		
		var crHeight = $("#contact").height();

		//alert("WINDOW HEIGHT: " + windowHeight);
		//alert("CONTACT HEIGHT: " + crHeight);
	}
	
	/************************************************************
	 *					01.02. PRELOADER
	 ************************************************************/
	function init_preloader() {
			var tLoader;	
			clearTimeout(tLoader);
			tLoader = setTimeout(function () {
				$('#preloader-content').fadeOut(100, function () {
					$('#preloader').fadeOut(100, function () {
						$(".hero-caption").animate({"opacity": 1},500, function(){
							$(".tw").animate({"opacity": 1},500);
							$(".navbar").animate({"opacity": 1},500);
						});
					});
				});
			}, 100);
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
			$( "#preloader" ).fadeIn( 500, function() {
				window.location = href;
			});
            }
            event.preventDefault();
        });
	}
	
	/************************************************************
	 *					01.04. CLIPBOARD
	 ************************************************************/
	function init_clipboard() {

		var clpbrdBtnEmail = new Clipboard('#email-copy');
		var clpbrdBtnFacetime = new Clipboard('#facetime-copy');
		
		$("#email-copy").click(function(){
			$("#email-copy-confirm").fadeIn(500).delay(500).fadeOut(500);
		});
		
		$("#facetime-copy").click(function(){
			$("#facetime-copy-confirm").fadeIn(500).delay(500).fadeOut(500);
		});
	}

	/************************************************************
	 *					02. WHEN PAGE IS FULLY LOADED
	 ************************************************************/

	$(window).on('load', function () {

		init_values();
		
		init_preloader();
		
		init_postloader();
		
		init_clipboard();
		
		$(window).on("scroll", {}, function(){
			$(".footer").animate({"opacity": 1},500);
		});
	});
	
});