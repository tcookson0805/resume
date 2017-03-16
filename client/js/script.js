$(document).ready(function() {
	
	// fading in hero content
	$('#hero').fadeTo(2000, 1);

	// scrolling
	$('body').on('click', '.nav-link', function(event) {
		event.preventDefault();
		var hash = this.hash;
		$('body').animate({
			scrollTop: $(hash).offset().top
		}, 800, function() {
			console.log('scrolled')
			window.location.hash = hash;
		})			
	});

	$('body').on('click', '.menu_logo', function(event) {
		event.preventDefault();
		$('body').animate({
			scrollTop: 0
		}, 800, function() {
			window.location.hash = '';
		})
	})


	// slides side menu in and out
	$('#main').on('click', '#nav-icon1', function() {
		
		if($('#menu').is(':visible')){
			$('#hero').animate({'margin-left': '0'});		
			$('#menu').hide()
		} else {
			$('#hero').animate({'margin-left': '25%'});		
			$('#menu').show(400);
		}

	});

	

	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
	});





















})

