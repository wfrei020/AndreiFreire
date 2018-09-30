$(function() {
console.log("ready");
$('fa-bars').on('click', function(){
console.log("whyyyy");
	});
	$('fa-bars').on('click', function(){
		console.log("do i get here");
		$('ul.mainNav').addClass('open');
	});
	$('ul.mainNav li a').on('click', function(){
		$('ul.mainNav').removeClass('open');
	});
});