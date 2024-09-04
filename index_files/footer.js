(function ($) {
    $(document).ready(function () {
        let active = $('.footer-tabs-tab').find('.active').data('tab');
        $('#' + active).addClass('active');

        $('.footer-tabs-tab .tab').on('click', function () {
            $('.footer-tabs-content-item').each(function () {
                $(this).removeClass('active');
            });

            $('.footer-tabs-tab .tab').each(function () {
                $(this).removeClass('active');
            });

            $(this).addClass('active');
            $('#' + $(this).data('tab')).addClass('active');
        });

        $('.footer-tabs-tab').slick({
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            prevArrow: '',
            nextArrow: '<button class="next"></button>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        arrows: false,
                    }
                },
            ]
        });

        $('.promotion-list').slick({
            responsive: [
                {
                    breakpoint: 9999,
                    settings: "unslick"
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 1.5,
                        slidesToScroll: 1,
                        infinite: true,
                        arrows: false,
                    }
                },
            ]
        });

        $('.vip-carousel .e-con-inner').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            prevArrow: $('.prev'),
            nextArrow: $('.next'),
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                },
            ]
        });

        $('.show-more-seo-button a').on('click', function (e){
            e.preventDefault();
            let text_block = $('.seo-text');
            if(text_block.hasClass('closed')) {
                text_block.removeClass('closed');
                text_block.css('max-height', 'unset');
                $(this).text('Show less')
            } else {
                text_block.addClass('closed');
                text_block.css('max-height', '240px');
                $(this).text('Show more')
            }
        })

    });
})(jQuery);