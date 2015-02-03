$(document).ready(function(){

  $('#button').hover(
    function(){
    $(this).addClass('active');
    },
    function(){
       $(this).removeClass('active'); 
    }
  );
      $('.holdingbox').hover(function(){
        $('.rightbox').animate({width: '90px'}, 1000)
    }, function(){
        $('.rightbox').animate({width: '-0'}, 1000)
  });
});