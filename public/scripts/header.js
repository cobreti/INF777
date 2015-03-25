(function() {

    $(document).ready( function() {

        var dept = window.location.pathname.split('/').length - 2;
        var subPath = '';
        var hrefHome = window.location.origin + '/index.html';

        while (dept > 0) {
            subPath = subPath + '../';
            dept--;
        }

        $('.header-location').load(subPath + '/fragments/header.html', function () {
            console.log('done loading');

            //$('.header-body').width(100);

            //
            // update menu links
            //

            var menuLinks = $('.header-location a');
            menuLinks.each(function (idx, element) {

                console.log(element);
                var elm = $(element);
                var href = window.location.origin + '/' + elm.attr('page');
                elm.attr('href', href);

                if (href == window.location) {
                    elm.addClass('active');
                    console.log('current menu item should be ' + element);
                }
            });

            //
            // update logo
            //

            var srcPath = window.location.origin + '/images/logo.gif';

            var logo = $('.header-location .logo img');
            logo.attr('src', srcPath);
            logo.on('click', function () {
                window.location.href = hrefHome;
            });
        });


    });

}());
