$(document).ready(function(){
  $('#deg270').mouseenter(function(){
    $('#text-one').fadeIn('fast')
  });
  $('#deg270').mouseleave(function(){
    $('#text-one').fadeOut('fast')
  });
  $('#deg2925').mouseenter(function(){
    $('#text-two').fadeIn('fast')
  });
  $('#deg2925').mouseleave(function(){
    $('#text-two').fadeOut('fast')
  });
  $('#deg315').mouseenter(function(){
    $('#text-three').fadeIn('fast')
  });
  $('#deg315').mouseleave(function(){
    $('#text-three').fadeOut('fast')
  });
  $('#deg3375').mouseenter(function(){
    $('#text-four').fadeIn('fast')
  });
  $('#deg3375').mouseleave(function(){
    $('#text-four').fadeOut('fast')
  });
  $('#deg0').mouseenter(function(){
    $('#text-five').fadeIn('fast')
  });
  $('#deg0').mouseleave(function(){
    $('#text-five').fadeOut('fast')
  });
  $('#deg90').mouseenter(function(){
    $('#text-six').fadeIn('fast')
  });
  $('#deg90').mouseleave(function(){
    $('#text-six').fadeOut ('fast')
  });
  $('#deg1125').mouseenter(function(){
    $('#text-seven').fadeIn ('fast')
  });
  $('#deg1125').mouseleave(function(){
    $('#text-seven').fadeOut('fast')
  });
  $('#deg135').mouseenter(function(){
    $('#text-eight').fadeIn ('fast')
  });
  $('#deg135').mouseleave(function(){
    $('#text-eight').fadeOut('fast')
  });
  $('#deg1575').mouseenter(function(){
    $('#text-nine').fadeIn ('fast')
  });
  $('#deg1575').mouseleave(function(){
    $('#text-nine').fadeOut('fast')
  });
  $('#deg180').mouseenter(function(){
    $('#text-ten').fadeIn ('fast')
  });
  $('#deg180').mouseleave(function(){
    $('#text-ten').fadeOut('fast')
  });

  var isVisible = false;
    $(window).scroll(function(){
      var shouldBeVisible = $(window).scrollTop()>200;
        if (shouldBeVisible && !isVisible) {
            isVisible = true;
        $('#circle-container').fadeIn('slow');
        } else if (isVisible && !shouldBeVisible) {
            isVisible = false;
        $('#circle-container').fadeOut('fast');
    }

});

});