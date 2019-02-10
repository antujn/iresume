(function($){
	$('body').append(
		'<div class="change-color-bl">'
			+'<a href="#" class="open-btn" title="Open/Close">Choose Color</a>'
			+'<div class="color-change-wrapper">'
				+'<header>'
					+'<div class="container">'
					+'<a class="logo">'
					+'<span class="logo-name">Manson Johnes</span>'
					+'<div class="logo-line">'
					+'<span>i`m passionated for print desing, Ui &amp; Web design</span>'
					+'</div>'
					+'</a>'
					+'<span class="select">Select color scheme:</span>'
					+'</div>'
				+'</header>'
				+'<ul class="select-theme-list">'
					+'<li class="default"><a href="#" data-color="default" title="Default">Default</a></li>'
					+'<li class="butterfly_bush"><a href="#" data-color="butterfly_bush" title="Butterfly Bush">Butterfly Bush</a></li>'
					+'<li class="corn"><a href="#" data-color="corn" title="Corn">Corn</a></li>'
					+'<li class="kashmir_blue"><a href="#" data-color="kashmir_blue" title="Kashmir Blue">Kashmir Blue</a></li>'
					+'<li class="mantis"><a href="#" data-color="mantis" title="Mantis">Mantis</a></li>'
					+'<li class="matrix"><a href="#" data-color="matrix" title="Matrix">Matrix</a></li>'
					+'<li class="mine_shaft"><a href="#" data-color="mine_shaft" title="Mine Shaft">Mine Shaft</a></li>'
					+'<li class="tapestry"><a href="#" data-color="tapestry" title="Tapestry">Tapestry</a></li>'
					+'<li class="tradewind"><a href="#" data-color="tradewind" title="Tradewind">Tradewind</a></li>'
					+'<li class="viridian"><a href="#" data-color="viridian" title="Viridian">Viridian</a></li>'
				+'</ul>'
				+'<a href="http://terranet.md" class="terranet-logo" target="blank"></a>'
			+'</div>'
		+'</div>'
	);
	$('.change-color-bl .open-btn').on('click', function(){
		$('.change-color-bl').toggleClass('opened');
		$('body').toggleClass('overhidd');
		return false;
	});
	function color_change(){
		var	location = window.location.hostname;
		var	locationProtocol = window.location.protocol;

		$('.change-color-bl .select-theme-list a').on('click',function(){
			var thisColor = $(this).data('color');
			$('#hireme-css').attr('href', locationProtocol + '//' + location + '/hireme-wp-template/wp-content/themes/hireme/css/hireme-' + thisColor + '-1.0.0.css?ver=1.0');
			$('.change-color-bl').removeClass('opened');
			$('body').removeClass('overhidd');
			return false;
		});
	}

	color_change()

	// 
})(jQuery);


