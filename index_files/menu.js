(function ($) {
    const width = '240px';
    $(document).ready(function () {
        $('#footer').css('padding-left', width);
        $('#content').css('padding-left', width);
        $('.desktop-header').css('padding-left', width);

        $(document).on('click', '#close_menu_section', function () {
            menu_control();
        });


        function menu_control() {
            let menu = $('.main-menu');
            let footer = $('#footer');
            let content = $('#content');
            let desktop = $('.desktop-header');

            if (menu.hasClass('hidden-menu')) {
                menu.removeClass('hidden-menu');
                menu.find('.dialog-widget-content').width(width)
                footer.css('padding-left', width);
                content.css('padding-left', width);
                desktop.css('padding-left', width)
            } else {
                menu.addClass('hidden-menu');
                menu.find('.dialog-widget-content').width('auto')
                footer.css('padding-left', 0);
                content.css('padding-left', 0);
                desktop.css('padding-left', 0);
            }
        }
    });
})(jQuery);