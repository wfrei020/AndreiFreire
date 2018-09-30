$(function() {


	$('.fa-bars').on('click', function(){
		console.log("do i get here");
		if($('ul.mainNav.open').val()!= undefined)
			$('ul.mainNav').removeClass('open');
		else
		$('ul.mainNav').addClass('open');
	});




	$('ul.mainNav li a').on('click', function(){
		$('ul.mainNav').removeClass('open');
	});
});