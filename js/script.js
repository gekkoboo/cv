$(document).ready(function(){
    var offset2 = $(document).height();
   var lineHF = offset2 - $("#bottommark").position().top;
    $(window).scroll(function(){
        var offset1 = $(document).height();
        var offset = $(window).scrollTop();
        var lineH = offset1 - $("#bottommark").position().top - offset;
        var lineHpart = lineHF/5; //just in case animation have 5 frames/images

        //below is code in case that animation have 5 frames.
        //If number of frames is different, edit code (add/remove if loops) 

        $("span").html(lineH);
            if (lineH > lineHpart*4) {
                $("#animation").attr("src", "http://coverjunction.s3.amazonaws.com/manual/low/colorful1.jpg");
            }
            if ((lineH < lineHpart*4) && (lineH > lineHpart*3)) {
                $("#animation").attr("src", "http://coverjunction.s3.amazonaws.com/manual/low/colorful2.jpg");
            }
            if ((lineH < lineHpart*3) && (lineH > lineHpart*2)) {
                $("#animation").attr("src", "http://coverjunction.s3.amazonaws.com/manual/low/colorful3.jpg");
            }
            if (lineH < lineHpart*2 && lineH > lineHpart*1) {
                $("#animation").attr("src", "http://coverjunction.s3.amazonaws.com/manual/low/colorful4.jpg");
            }
            if (lineH < lineHpart) {
                $("#animation").attr("src", "http://coverjunction.s3.amazonaws.com/manual/low/colorful5.jpg");
            }
        });
    });