// Ugly code, but for now the only way it will work... 
// This functions make text hover over the images
$(document).ready(function(){
	$('#photo1').mouseenter(function(){
		$('#text1').fadeIn(800);
	});
	$('#photo1').mouseleave(function(){
		$('#text1').fadeOut(800);
	});
	$('#photo2').mouseenter(function(){
		$('#text2').fadeIn(800);
	});
	$('#photo2').mouseleave(function(){
		$('#text2').fadeOut(800);
	});
	$('#photo3').mouseenter(function(){
		$('#text3').fadeIn(800);
	});
	$('#photo3').mouseleave(function(){
		$('#text3').fadeOut(800);
	});
	$('#photo4').mouseenter(function(){
		$('#text4').fadeIn(800);
	});
	$('#photo4').mouseleave(function(){
		$('#text4').fadeOut(800);
	});
	$('#photo5').mouseenter(function(){
		$('#text5').fadeIn(800);
	});
	$('#photo5').mouseleave(function(){
		$('#text5').fadeOut(800);
	});
	$('#photo6').mouseenter(function(){
		$('#text6').fadeIn(800);
	});
	$('#photo6').mouseleave(function(){
		$('#text6').fadeOut(800);
	});
});


function myFunction() {
    document.getElementById("gallerylist").style.display = "block";
}

function myFunction2() {
	document.getElementById("gallerylist").style.display = "none";
}