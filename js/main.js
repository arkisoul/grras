$(function() {
    $('body').on('click', '.nav-search', function(event) {
        event.preventDefault();
        /* Act on the event */
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('#nav_search').css('display', 'none');
            $('#nav_search').animate({
                width: 0
            }, 400);
        } else {
            $(this).addClass('active');
            $('#nav_search').css('display', 'inline-block');
            $('#nav_search').animate({
                width: '100px'
            }, 400);
        }
    });
});
