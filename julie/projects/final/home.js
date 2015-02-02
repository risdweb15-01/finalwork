$(document).ready(function(){


    $('.checkboxList .row').css('color','red');
    $('.checkboxList input').attr('checked', true);
    $('.checkboxList input').bind('click', function() {
    	$('#message').html("You clicked on a checkbox.").fadeIn('slow');
    });

	});