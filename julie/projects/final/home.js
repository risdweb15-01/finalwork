$(document).ready(function(){

    $('.transition').click(function(){

        newLocation = this.href;


    $('.text').fadeOut("slow", function(){

        window.location=newLocation;
    })

    return false;

})

    
});