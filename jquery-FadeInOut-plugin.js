/*
 * FadeInOut - jQuery plugin 1.0.0 by Anmol Saraf
 *
 * Copyright (c) 2012 Anmol Saraf
 *
 * www.anmolsaraf.com
 * asaraf@anmolsaraf.com
 *
 * USAGE: 
 * $('.containerClass').FadeInOut({images:["images/imgName.jpg","images/imgName1.gif","images/imgName2.png","images/imgName3.jpg"]}); 
 */
 
$.FadeInOut = { version: '1.0' };
$.fn.FadeInOut = function(options){

	var defaults = {
	sint : 1,
	slideDuration : 2000,
	images : ""
	};
	
	var options = $.extend(defaults, options);
	if(options.images == "") {
		alert('Please pass the required parameters with image path');
		return ;	
	}
	var odd = true,
		scrollInterval,
		totalSlides = options.images.length;
	
	this.append('<div class="imgDivUp"><img src="'+ options.images[0] +'" alt="" /></div>\
    <div class="imgDiv"><img src="'+ options.images[0] +'" alt="" /></div>');
	
	$('.imgDivUp').css({'display':'block','overflow':'hidden', 'position':'absolute', 'z-index':1})
	$('.imgDiv').css({'display':'block','overflow':'hidden', 'position':'absolute', 'z-index':2})
	
	function getOdd() {
		odd = !odd;
		return odd?".imgDiv":".imgDivUp";	
	}
	
	function updateTimer() {
		clearInterval(scrollInterval);
		startTimer();
	}
	
	function fadeInOut(imgSrc, index) {
		var temp = getOdd();

		if(temp == ".imgDiv") {
			$(".imgDiv img").attr({"src": imgSrc});
			$(".imgDiv img").fadeIn();
		} else if (temp == ".imgDivUp"){
			$(".imgDivUp img").attr({"src": imgSrc});
			$(".imgDiv img").fadeOut();
		}

		options.sint = index;
		updateTimer();	
	}
				
	function next(index) {
		var easeType = 'easeOutBounce'
		duration = 1200;
		fadeInOut(options.images[( index - 1 )], index);
	}
	
	function startTimer() {
		scrollInterval = setTimeout(function () {
			options.sint++;
			if(options.sint > totalSlides)
				options.sint = 1;
			
			next(options.sint);
			//$("#absScrollBox a[href=#"+ sint +"]").click();
		},options.slideDuration);
	}
	startTimer();
};