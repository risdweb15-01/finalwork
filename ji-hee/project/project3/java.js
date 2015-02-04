$(document).ready(function(){
$(".click").on('click', function () {
  $(this).toggleClass('open');
  $(this).next(".content").slideToggle('400', 'linear');
});
});
