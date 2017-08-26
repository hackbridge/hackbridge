$(document).ready(function(){
        // hide #back-top first
        $("#back-top").hide();
        // fade in #back-top
        $(function () {
            $(window).scroll(function () {
                var sub_pos = $('#subscribe').position().top;
                var cur_scroll = $(this).scrollTop();
                if (cur_scroll > 100 && Math.abs(cur_scroll-sub_pos) > 200 && cur_scroll < sub_pos) {
                    $('#back-top').fadeIn();
                } else {
                    $('#back-top').fadeOut();
                }
            });

        $('a#back-top').click(function () {
            document.getElementById('subscribe').click();
        });    
    }); 
});