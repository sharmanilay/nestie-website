$(document).ready(function(){

	//parallax init
	startSite();

	$('#fullpage').fullpage();

	// mulitscroll.js init
	$('#multiscroll').multiscroll();

	//fancybox.js init
	$('.fancybox').fancybox({
		openEffect : 'none',
		closeEffect : 'none',
		prevEffect : 'none',
		nextEffect : 'none',

		arrows : false,
		helpers : {
			media : {},
			buttons : {}
		}
	});



	//wow.js init
	wow = new WOW(
	    {
		  animateClass: 'animated',
		  mobile: false,
		  offset: 100
		}
	);
	wow.init();



});
$('.carousel[data-type="multi"] .item').each(function() {
				var next = $(this).next();
				if (!next.length) {
					next = $(this).siblings(':first');
				}
				next.children(':first-child').clone().appendTo($(this));

				for (var i = 0; i < 2; i++) {
					next = next.next();
					if (!next.length) {
						next = $(this).siblings(':first');
					}

					next.children(':first-child').clone().appendTo($(this));
				}
			});

function castParallax() {

	var opThresh = 400;
	var opFactor = 750;


	$(window).scroll(function(){
		var windowScroll = this.pageYOffset - 1750;
		
		$('.keyart_layer.parallax').each(function(){
			var $layer = $(this);
			var yPos = -(windowScroll * $layer.data('speed') / 100);
			$layer.css({
				"transform" : "translate3d(0px, " + yPos + "px, 0px)"
			});

		});
		/*var backgroundOpacity = (windowScroll > opThresh ? (windowScroll - opThresh) / opFactor : 0);
		$('#keyart-scrim').css('opacity', backgroundOpacity);*/
	});


	window.addEventListener("scroll", function(event){
		var top = this.pageYOffset -1750;

		var layers = document.getElementsByClassName("parallax");
		var layer, speed, yPos;
		 if(window.pageYOffset>1200){
			for (var i = 0; i < layers.length; i++) {
				layer = layers[i];
				speed = layer.getAttribute('data-speed');
				var yPos = -(top * speed / 100);
				layer.setAttribute('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');
			}	
		}else{
			layer.setAttribute('style', 'transform: translate3d(0px, 0px, 0px)');
		}
	});


}

function dispelParallax() {
	$("#nonparallax").css('display','block');
	$("#parallax").css('display','none');
}

function castSmoothScroll() {
	$.srSmoothscroll({
		step: 80,
		speed: 100,
		ease: 'linear'
	});
}



function startSite() {

	var platform = navigator.platform.toLowerCase();
	var userAgent = navigator.userAgent.toLowerCase();

	if ( platform.indexOf('ipad') != -1  ||  platform.indexOf('iphone') != -1 ) 
	{
		dispelParallax();
	}
	
	else if (platform.indexOf('win32') != -1 || platform.indexOf('linux') != -1)
	{
		castParallax();					
		if ($.browser.webkit)
		{
			castSmoothScroll();
		}
	}
	
	else
	{
		castParallax();
	}

}
