$(document).ready(function() {

	$(".topopout").click(function() {
		var product_id = $(this).data('product_id');
		loadPopout(product_id);
	});

	
    $("div#background-popout").click(function() {
		disablePopout();  // function close pop up
	});

	var popoutStatus = 0; // set value

	function loadPopout(product_id) {
		if(popoutStatus == 0) { // if value is 0, show popup
			$("#popout_"+product_id).fadeIn(0500); // fadein popup div
			$("#background-popout").css("opacity", "0.7"); // css opacity, supports IE7, IE8
			$("#background-popout").fadeIn(0001);
			popupStatus = 1; // and set value to 1
		}
	}

	function disablePopout() {
		if(popupStatus == 1) { // if value is 1, close popup
			$(".popout").fadeOut("normal");
			$("#background-popout").fadeOut("normal");
			popoutStatus = 0;  // and set value to 0
		}
	}

});