$(function () {
    $slides = $(".mySlides");
    var index = 0;
    play();
    
    // play the slides
    function play()
    {
        $slides.css("display", "none");
        index++;
        if (index > $slides.length) { index = 1;}
        $slides.eq(index-1).css("display","block");
        setTimeout(play, 5000);
    }
    $("button").on("click",function()
        {
        var id = this.id;
        if (id == "next")
        {
            
            index += 1;
            play();
           
        }
        if (id = "prev") {
            index += -2;
            if (index < 1) { index = $slides.length; };
            play();
        }   
            
        
        });
});