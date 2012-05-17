/*
 * FadeInOut - jQuery plugin 1.0.0
 *
 * Copyright (c) 2012 Anmol Saraf
 *
 * www.anmolsaraf.com
 * asaraf@anmolsaraf.com
 *
 * USAGE: 
 * $('.containerClass').fadeInOutByAnmolSaraf({images:["images/imgName.jpg","images/imgName1.gif","images/imgName2.png","images/imgName3.jpg"]}); 
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
	
	this.append('<div class="imgDivUp"><img src="images/Final_AlShaya_Promotions1.jpg" alt="" /></div>\
    <div class="imgDiv"><img src="images/img-thumb427x427.jpg" alt="" /></div>');
	
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
		
		switch(index) {
			case 1:
				fadeInOut(options.images[0], index);
			break;
			
			case 2:
				fadeInOut(options.images[1], index);
			break;
			case 3:
				fadeInOut(options.images[2], index);
			break;
			case 4:
				fadeInOut(options.images[3], index);
			break;
		}
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