
//<script type="text/javascript">
$( document ).ready(function() {
	$('.box').click(function(){
	$(this).addClass('zindex');
	$(this).siblings('.box').removeClass('zindex');
	});
});
$( document ).ready(function() {
	$('.p').click(function(){
  	$(this).addClass('active');
  	$(this).siblings('.p').removeClass('active');
	});
});
$( document ).ready(function() {
	$('.box1,.box2,.box3,.box4,.box5').click(function(){
  	$(this).addClass('active');
  	$(this).siblings('.box1,.box2,.box3,.box4,.box5').removeClass('active');
	});
});
