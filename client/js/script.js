$(document).ready(function() {
	
	// scrolling
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
	});


	$('.form_submit').on('click', 'button', function(event) {

		event.preventDefault();

		var name = $('#sender_name').val();
		var email = $('#sender_email').val();
		var subject = $('#sender_name').val() + ' via tylercookson.com';
		var message = $('#sender_message').val();
		// console.log('clicked');

		$.get('/send', {
			name: name,
			email: email,
			subject: subject,
			message: message
		}, function(data) {
				console.log('data', data);
			if(data == 'sent') {
				console.log('sent!!!')
			} else {
				console.log('failure')
			}
		});


		
	})


})