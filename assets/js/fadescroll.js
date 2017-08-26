
$(document).ready(function(){
        // extension:
        $.fn.scrollEnd = function(callback, timeout) {          
            $(this).scroll(function(){
            var $this = $(this);
            if ($this.data('scrollTimeout')) {
                clearTimeout($this.data('scrollTimeout'));
            }
            $this.data('scrollTimeout', setTimeout(callback,timeout));
            });
        };

        var isClicked = false;
        var isForced = false;
        // hide #back-top first
        $("#back-top").hide();
        // fade in #back-top
        $(function () {
            $(window).scroll(function () {
                var sub_pos = $('#subscribe').position().top;
                var cur_scroll = $(this).scrollTop();
                if ($('#back-top').css("background-color")=== "rgb(155, 241, 255)" && isClicked) {
                    isClicked = false
                    isForced = true
                    $('#back-top').toggleClass("force");
                }
                if (!$('#back-top').is(":hover") && isForced) {
                    isForced = false
                    $('#back-top').toggleClass("force");
                }
                if (cur_scroll > 100 && Math.abs(cur_scroll-sub_pos) > 200 && cur_scroll < sub_pos) {
                    $('#back-top').fadeIn();
                } else {
                    $('#back-top').fadeOut();
                }
            }); 

        $('a#back-top').click(function () {
            isClicked = true
        });
        
        $(window).scrollEnd(function(){
            //Stopped scrolling
        }, 500);
    }); 
});
