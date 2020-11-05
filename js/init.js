/*
 * Copyright (c) 2020 Marketify
 * Author: Marketify
 * This file is made for CURRENT TEMPLATE
*/

jQuery(document).ready(function(){

	"use strict";
	
	function waxon_tm_about_animations(){
		
		var image = document.getElementsByClassName('thumbnail');
		new simpleParallax(image, {
			delay:5,
			overflow: true,
			orientation:'down'
		});
		
		var image2 = document.getElementsByClassName('thumbnail-2');
		new simpleParallax(image2, {
			delay:5,
			overflow: true,
			orientation:'right'
		});
		
		var image3 = document.getElementsByClassName('thumbnail-3');
		new simpleParallax(image3, {
			delay:5
		});
		
		var image4 = document.getElementsByClassName('thumbnail-4');
		new simpleParallax(image4, {
			delay:5,
			orientation:'right'
		});
	}
	waxon_tm_about_animations();
	
	// -----------------------------------------------------
	// --------------------    WOW JS    -------------------
	// -----------------------------------------------------

 	new WOW().init();
	
	// -----------------------------------------------------
	// ---------------------   SWITCHERS    ----------------
	// -----------------------------------------------------

	function waxon_tm_color_switcher(){

		var list	= jQuery('.waxon_tm_settings .colors li a');

		list.on('click',function(){
			var element = jQuery(this);
			var elval	= element.attr('class');
			element.closest('.waxon_tm_all_wrap').attr('data-color',''+elval+'');
			return false;
		});	
	}
	waxon_tm_color_switcher();


	function waxon_tm_switcher_opener(){

		var settings	= jQuery('.waxon_tm_settings');
		var button		= settings.find('.link');
		var direction	= settings.find('.direction li a');
		var light		= settings.find('.direction li a.light');
		var dark		= settings.find('.direction li a.dark');

		button.on('click',function(){
			var element = jQuery(this);
			if(element.hasClass('opened')){
				element.removeClass('opened');
				element.closest('.waxon_tm_settings').removeClass('opened');
			}else{
				element.addClass('opened');
				element.closest('.waxon_tm_settings').addClass('opened');
			}
			return false;
		});

		direction.on('click',function(){
			var element = jQuery(this);
			if(!element.hasClass('active')){
				direction.removeClass('active');
				element.addClass('active');
			}
		});

		dark.on('click',function(){
			var el = jQuery(this);
			jQuery('body').addClass('dark');
			jQuery('.waxon_tm_partners').addClass('opened');
			el.closest('.waxon_tm_settings').addClass('changed');
			return false;
		});

		light.on('click',function(){
			var ele = jQuery(this);
			jQuery('body').removeClass('dark');
			jQuery('.waxon_tm_partners').removeClass('opened');
			ele.closest('.waxon_tm_settings').removeClass('changed');
			return false;
		});
	}
	waxon_tm_switcher_opener();


	function waxon_tm_cursor_switcher(){

		var wrapper		= jQuery('.waxon_tm_all_wrap');
		var button		= jQuery('.waxon_tm_settings .cursor li a');
		var show		= jQuery('.waxon_tm_settings .cursor li a.show');
		var hide		= jQuery('.waxon_tm_settings .cursor li a.hide');

		button.on('click',function(){
			var element = jQuery(this);
			if(!element.hasClass('showme')){
				button.removeClass('showme');
				element.addClass('showme');
			}
			return false;
		});
		show.on('click',function(){
			wrapper.attr('data-magic-cursor','')
		});
		hide.on('click',function(){
			wrapper.attr('data-magic-cursor','hide')
		});

	}
	waxon_tm_cursor_switcher();
	
	// -------------------------------------------------
	// -------------  SLIDER KENBURN  ------------------
	// -------------------------------------------------

	function waxon_tm_kenburn_slider(){

		jQuery(function() {
			jQuery('.waxon_tm_hero .overlay_slider').vegas({
			timer:false,	
			animation: [ 'kenburnsUp',  'kenburnsLeft', 'kenburnsRight'],
			delay:7000,

			slides: [
				{ src: 'img/slider/1.jpg' },
				{ src: 'img/slider/2.jpg' },
				{ src: 'img/slider/3.jpg' },
			]

		});
	});

	}
	waxon_tm_kenburn_slider();
	
	// -------------------------------------------------
	// -------------------  ANCHOR ---------------------
	// -------------------------------------------------

	function waxon_tm_anchor(){

		jQuery('.waxon_tm_topbar .menu .links ul li a,.waxon_tm_mobile_menu .dropdown .dropdown_inner ul li a').off().on('click',function(e){
			e.stopPropagation();
			var element = jQuery(this);
			var url			= element.attr('href');
			if(url !== '#' && url.charAt(0) === '#'){
				$('html, body').animate({
					scrollTop: $(url).offset().top-60
				}, 1000);
			}
			return false;
		});
	}
	waxon_tm_anchor();
	
	// -------------------------------------------------
	// -------------------  FILTER OPENER --------------
	// -------------------------------------------------

	function waxon_tm_filter_opener(){

		var button	= jQuery('.waxon_tm_portoflio .portfolio_filter .wrapper a');
		var list	= jQuery('.waxon_tm_portoflio .portfolio_filter ul li');

		button.on('click',function(){
			var element = jQuery(this);
			if(element.hasClass('opened')){
				element.removeClass('opened');
				list.removeClass('opened');
			}else{
				element.addClass('opened');
				list.each(function(i){
					var ele = jQuery(this);
					setTimeout(function(){ele.addClass('opened');},i*100);
				});
			}
			return false;
		});
	}
	waxon_tm_filter_opener();
	
	// -----------------------------------------------------
	// -----------   TESTIMONIAL HOVER    ------------------
	// -----------------------------------------------------

	function waxon_tm_testimonials_effect(){

		var list	= jQuery('.waxon_tm_testimonials .testi_inner .right .image_list ul li');

		list.on('mouseenter',function(){
			var element = jQuery(this);
			var elIndex = element.index()+1;
			list.removeClass('active');
			element.addClass('active');
			element.closest('.waxon_tm_testimonials').find('.quote_list ul li').removeClass('active');
			element.closest('.waxon_tm_testimonials').find('.quote_list ul li:nth-child('+elIndex+')').addClass('active');
		});
	}
	waxon_tm_testimonials_effect();
	
	// -----------------------------------------------------
	// --------------------    JARALLAX    -----------------
	// -----------------------------------------------------

	function waxon_tm_jarallax(){

		jQuery('.jarallax').each(function(){
			var element			= jQuery(this);
			var	customSpeed		= element.data('speed');

			if(customSpeed !== "undefined" && customSpeed !== ""){
				customSpeed = customSpeed;
			}else{
				customSpeed 	= 0.5;
			}

			element.jarallax({
				speed: customSpeed,
				automaticResize: true
			});
		});
	}
	waxon_tm_jarallax();
	
	// -----------------------------------------------------
	// ---------------   MOBILE MENU    --------------------
	// -----------------------------------------------------

	function waxon_mobile_menu(){

		var trigger			= jQuery('.waxon_tm_mobile_menu .topbar_inner .trigger,.waxon_tm_mobile_menu_single .topbar_inner .trigger');
		var triggerClose	= trigger.find('a .close');
		var triggerMenu		= trigger.find('a .menu');
		var dropdown		= jQuery('.waxon_tm_mobile_menu .dropdown,.waxon_tm_mobile_menu_single .dropdown');

		trigger.on('click',function(){
			var element	= jQuery(this);
			if(element.hasClass('opened')){
				element.removeClass('opened');
				triggerMenu.removeClass('closed');
				triggerClose.removeClass('opened');
				dropdown.slideUp();
			}else{
				element.addClass('opened');
				triggerMenu.addClass('closed');
				triggerClose.addClass('opened');
				dropdown.slideDown();
			}
			return false;
		});
	}
	waxon_mobile_menu();
	
	// -----------------------------------------------------
	// --------------   TOPBAR BACKGROUND    ---------------
	// -----------------------------------------------------

	function waxon_tm_nav_bg(){

		jQuery(window).on('scroll',function(){
			var topbar	 		= jQuery('.waxon_tm_topbar,.waxon_tm_topbar_single');
			var WinOffset		= jQuery(window).scrollTop();

			if(WinOffset >= 100){
				topbar.addClass('animate');
			}else{
				topbar.removeClass('animate');
			}
		});
	}
	waxon_tm_nav_bg();
	
	// -----------------------------------------------------
	// ------------------   CURSOR    ----------------------
	// -----------------------------------------------------

	function waxon_tm_cursor(){

		var myCursor	= jQuery('.mouse-cursor');

		if(myCursor.length){
			if ($("body")) {
			const e = document.querySelector(".cursor-inner"),
				t = document.querySelector(".cursor-outer");
			let n, i = 0,
				o = !1;
			window.onmousemove = function (s) {
				o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
			}, $("body").on("mouseenter", "a, .cursor-pointer", function () {
				e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
			}), $("body").on("mouseleave", "a, .cursor-pointer", function () {
				$(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
			}), e.style.visibility = "visible", t.style.visibility = "visible"
		}
		}
	};
	waxon_tm_cursor();
	
	// -----------------------------------------------------
	// ----------------    OWL CAROUSEL    -----------------
	// -----------------------------------------------------

	function waxon_tm_partners(){

		var carousel			= jQuery('.waxon_tm_service .owl-carousel');

		var rtlMode	= false;

		if(jQuery('body').hasClass('rtl')){
			rtlMode = 'true';
		}

		carousel.owlCarousel({
			loop: true,
			items: 2,
			lazyLoad: false,
			margin: 70,
			autoplay: true,
			autoplayTimeout: 7000,
			rtl: rtlMode,
			dots: true,
			nav: false,
			navSpeed: true,
			responsive:{
				0:{items:1},
				480:{items:1},
				768:{items:2},
				1040:{items:3},
				1200:{items:3},
				1600:{items:3},
				1920:{items:3}
			}
		});
		waxon_tm_imgtosvg();
	}
	waxon_tm_partners();
	
	// -----------------------------------------------------
	// ---------------    IMAGE TO SVG    ------------------
	// -----------------------------------------------------

	function waxon_tm_imgtosvg(){

		jQuery('img.svg').each(function(){

			var jQueryimg 		= jQuery(this);
			var imgClass		= jQueryimg.attr('class');
			var imgURL			= jQueryimg.attr('src');

			jQuery.get(imgURL, function(data) {
				// Get the SVG tag, ignore the rest
				var jQuerysvg = jQuery(data).find('svg');

				// Add replaced image's classes to the new SVG
				if(typeof imgClass !== 'undefined') {
					jQuerysvg = jQuerysvg.attr('class', imgClass+' replaced-svg');
				}

				// Remove any invalid XML tags as per http://validator.w3.org
				jQuerysvg = jQuerysvg.removeAttr('xmlns:a');

				// Replace image with new SVG
				jQueryimg.replaceWith(jQuerysvg);

			}, 'xml');

		});
	}
	waxon_tm_imgtosvg();
	
	// -----------------------------------------------------
	// --------------------   POPUP    ---------------------
	// -----------------------------------------------------

	function waxon_tm_popup(){

		jQuery('.gallery_zoom').each(function() { // the containers for all your galleries
			jQuery(this).magnificPopup({
				delegate: 'a.zoom', // the selector for gallery item
				type: 'image',
				gallery: {
				  enabled:true
				},
				removalDelay: 300,
				mainClass: 'mfp-fade'
			});

		});
		jQuery('.popup-youtube').each(function() { // the containers for all your galleries
			jQuery(this).magnificPopup({
				disableOn: 700,
				type: 'iframe',
				mainClass: 'mfp-fade',
				removalDelay: 160,
				preloader: false,
				fixedContentPos: false
			});
		});
	}
	waxon_tm_popup();

	// -----------------------------------------------------
	// ---------------   DATA IMAGES    --------------------
	// -----------------------------------------------------

	function waxon_tm_data_images(){

		var data			= jQuery('*[data-img-url]');

		data.each(function(){
			var element			= jQuery(this);
			var url				= element.data('img-url');
			element.css({backgroundImage: 'url('+url+')'});
		});
	}
	waxon_tm_data_images();

	// -------------------------------------------------
	// -----------------    PORTFOLIO    ---------------
	// -------------------------------------------------

	// filterable 

	function waxon_tm_portfolio(){

		if(jQuery().isotope) {

			// Needed variables
			var list 		 = jQuery('.waxon_tm_portoflio .portfolio_inner ul');
			var filter		 = jQuery('.waxon_tm_portoflio .portfolio_filter ul');

			if(filter.length){
				// Isotope Filter 
				filter.find('a').on('click', function(){
					var selector = jQuery(this).attr('data-filter');
					list.isotope({ 
						filter				: selector,
						animationOptions	: {
							duration			: 750,
							easing				: 'linear',
							queue				: false
						}
					});
					return false;
				});	

				// Change active element class
				filter.find('a').on('click', function() {
					filter.find('a').removeClass('current');
					jQuery(this).addClass('current');
					return false;
				});	
			}
		}
	}
	waxon_tm_portfolio();
	
	function waxon_tm_myload(){
		setTimeout(function(){
			jQuery('.waxon_tm_preloader').addClass('loaded');
		}, 1000);
		setTimeout(function(){
			jQuery('.waxon_tm_hero .background .myOverlay').addClass('loaded');
		}, 2000);
		setTimeout(function(){
			jQuery('.waxon_tm_topbar').addClass('opened');
		}, 3000);
	
		setTimeout(function(){
			waxon_tm_isotope();
		}, 5000);
	}

	// -----------------------------------------------------
	// --------------    ISOTOPE MASONRY    ----------------
	// -----------------------------------------------------

	function waxon_tm_isotope(){

		var masonry = $('.masonry');
		if($().isotope){
			masonry.each(function(){
				$(this).isotope({
				  itemSelector: '.masonry_item',
				  masonry: {

				  }
				});
			});
		}
	}
	waxon_tm_isotope();

	// -----------------------------------------------------
	// ----------------    CONTACT FORM    -----------------
	// -----------------------------------------------------

	function waxon_tm_contact_form(){

		jQuery(".contact_form #send_message").on('click', function(){

			var name 		= jQuery(".contact_form #name").val();
			var email 		= jQuery(".contact_form #email").val();
			var message 	= jQuery(".contact_form #message").val();
			var subject 	= jQuery(".contact_form #subject").val();
			var success     = jQuery(".contact_form .returnmessage").data('success');

			jQuery(".contact_form .returnmessage").empty(); //To empty previous error/success message.
			//checking for blank fields	
			if(name===''||email===''||message===''){

				jQuery('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
			}
			else{
				// Returns successful data submission message when the entered information is stored in database.
				jQuery.post("modal/contact.php",{ ajax_name: name, ajax_email: email, ajax_message:message, ajax_subject: subject}, function(data) {

					jQuery(".contact_form .returnmessage").append(data);//Append returned message to message paragraph


					if(jQuery(".contact_form .returnmessage span.contact_error").length){
						jQuery(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500);		
					}else{
						jQuery(".contact_form .returnmessage").append("<span class='contact_success'>"+ success +"</span>");
						jQuery(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500);
					}

					if(data===""){
						jQuery("#contact_form")[0].reset();//To reset form fields on success
					}

				});
			}
			return false; 
		});
	}
	waxon_tm_contact_form();
	
	// -------------------------------------------------
	// -------------  GLITCH  --------------------------
	// -------------------------------------------------

	$(".glitch").mgGlitch({
		destroy: false,
		glitch: true,
		scale: true,
		blend: true,
		blendModeType: "hue",
		glitch1TimeMin: 200,
		glitch1TimeMax: 400,
		glitch2TimeMin: 10,
		glitch2TimeMax: 100
	});
	
	// -------------------------------------------------
	// -------------  RESIZE FUNCTION  -----------------
	// -------------------------------------------------
	
	jQuery(window).on('resize',function(){
		waxon_tm_isotope();
		waxon_tm_portfolio();
	});
	
	// -------------------------------------------------
	// -------------  LOAD FUNCTION  -------------------
	// -------------------------------------------------
	
	jQuery(window).load('body', function(){
		waxon_tm_myload();
	});
	
});