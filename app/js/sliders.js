//imageslider
$(function(){
    $(document).ready(function() {
        $(".imageslider-items").each(function() {
            var thisElement = $(this);
            thisElement.slick({
                dots: false,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '20px',
                prevArrow: thisElement.closest('.imageslider').find('.sliderPrevButton'),
                nextArrow: thisElement.closest('.imageslider').find('.sliderNextButton'),
                mobileFirst: true,
                responsive: [
                    {
                        breakpoint:992,
                        settings: {
                            slidesToShow: 1,
                            centerPadding: '60px',
                        }
                    },
                    {
                        breakpoint:1500,
                        settings: {
                            slidesToShow: 1,
                            centerPadding: '40px',
                        }
                    },
                 ]
            });
        })
    });
});

// announcements slider
$(function(){
    $(document).ready(function() {
        $(".announcementslider-items").each(function() {
            var thisElement = $(this);
            thisElement.slick({
                dots: true,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow: false,
                nextArrow: false,
                mobileFirst: true,
                responsive: [
                    {
                        breakpoint:992,
                        settings: {
                            slidesToShow: 1
                        }
                    },
               ]
            });
        });
    });
    $(function(){
        $(".announcements-shapes svg").first().addClass("__active");
        $(".slick-dots").on("click", "li", function(){
            var indexOfClickedItem = $(this).index();
            $(".announcements-shapes svg.__active").removeClass("__active");
            $(".announcements-shapes").find("svg[data-index="+indexOfClickedItem+"]").addClass("__active");
        });
    });
});