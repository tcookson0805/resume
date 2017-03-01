$(document).ready(function() {
	
	$('body').on('click', '.nav-link', function(event) {

		if(this.hash !== ''){

			event.preventDefault();

			var hash = this.hash;

			$('body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function() {
				console.log('scrolled')
				window.location.hash = hash;
			})			
		
		} else {
			
			event.preventDefault();

			$('body').animate({
				scrollTop: 0
			}, 800, function() {
				window.location.hash = '';
			})

		}

	})


})