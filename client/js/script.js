$(document).ready(function() {

	var header = $('.hero_headline').clone();
	var about = $('.about_link_content').clone();
	var skills = $('.skills_link_content').clone();
	var projects = $('.projects_link_content').clone();

	$('.hero_content').append(header)


	var intro = $('.header_first').fadeIn('slow', function(){
		$('.header_second').fadeIn('slow', function(){
			$('.header_third').fadeIn('slow', function() {
				$('.links').fadeIn('slow')
			})
		})
	})


	$('body').on('click', '.header', function() {
		$('.about_link').removeClass('highlight');
		$('.skills_link').removeClass('highlight');
		$('.projects_link').removeClass('highlight');
		$('.hero_content').children().remove();
		$('.hero_content').append(header);
	})

	$('body').on('click', '.about_link', function() {
		console.log('click')
		$(this).toggleClass('highlight')
		$('.skills_link').removeClass('highlight');
		$('.projects_link').removeClass('highlight');
		$('.hero_content').children().remove();
		$('.hero_content').append(about);
	});

	$('body').on('click', '.skills_link', function() {
		console.log('click')
		$(this).toggleClass('highlight')
		$('.about_link').removeClass('highlight');
		$('.projects_link').removeClass('highlight');
		$('.hero_content').children().remove();
		$('.hero_content').append(skills);
	});

	$('body').on('click', '.projects_link', function() {
		console.log('click')
		$(this).toggleClass('highlight')
		$('.about_link').removeClass('highlight');
		$('.skills_link').removeClass('highlight');
		$('.hero_content').children().remove();
		$('.hero_content').append(projects);
	});


})