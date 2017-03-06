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

	// message form
	$('.form_submit').on('click', 'button', function(event) {
		var name = $('#sender_name').val();
		var email = $('#sender_email').val();
		var subject = $('#sender_name').val() + ' via tylercookson.com';
		var message = $('#sender_message').val();

		$.get('/send', {
			name: name,
			email: email,
			subject: subject,
			message: message
		}, function(data) {
			if(data == 'sent') {
				console.log('sent!!!')
			} else {
				console.log('failure')
			}
		});
	})

	// slides side menu in and out
	$('#main').on('click', '.menu_small', function() {
		
		if($('#menu').is(':visible')){
			$('#hero').animate({'margin-left': '0'});		
			$('#menu').hide()
		} else {
			$('#hero').animate({'margin-left': '20%'});		
			$('#menu').show(400);
		}

	});






















})

