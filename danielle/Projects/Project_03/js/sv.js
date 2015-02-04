$(document).ready(function(){
	 $('.about').hover(function(){
        $(this).addClass('active');
    },
    function(){
       $(this).removeClass('active'); 
    }
  );

});