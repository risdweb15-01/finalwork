$(document).ready(function(){
	//hover stuff
	 $('.about').hover(function(){
        $(this).addClass('active');
    },
    function(){
       $(this).removeClass('active'); 
    }
  );

});