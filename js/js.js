$(document).ready(function() {

	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		var menuEl = $('#floating-menu');
		
		var breakpoints = ['#one', '#two', '#three', '#four', '#five']
		for(var i=0; i<breakpoints.length; i++){
			var breakpointEl = $(breakpoints[i]) 
			console.log(breakpointEl)
			var breakpointOffsetTop = breakpointEl.offset().top - 800;		
			if(scrollTop >= breakpointOffsetTop){
				breakpointEl.css('transform', 'scale(1)');
			}else{
				breakpointEl.css('transform', 'scale(0)');
			}
		}


	});

	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		var menuEl = $('#floating-menu');
		var breakpoint = $('#intro').offset().top - 1;
		console.log(breakpoint, scrollTop)
		if(scrollTop >= breakpoint){
			menuEl.css('opacity', 1);
		}else{
			menuEl.css('opacity', 0);
		}
	});

	$('#hero-scroll-button').click(function(){
		var section = document.getElementById('intro')
		section.scrollIntoView({ behavior: 'smooth' });
	});
});

