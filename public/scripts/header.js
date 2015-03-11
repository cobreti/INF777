(function() {

    var dept = window.location.pathname.split('/').length - 2;
    var subPath = '';

    while (dept > 0) {
        subPath = subPath + '../';
        dept --;
    }

    $('.header-location').load(subPath + 'header.html', function() {
        console.log('done loading');

        var menuLinks = $('.header-location a');
        menuLinks.each( function(idx, element) {

            console.log(element);
            var elm = $(element);
            var href = window.location.origin + '/' + elm.attr('page');
            elm.attr('href', href);

            if (href == window.location) {
                console.log('current menu item should be ' + element);
            }
        });
    });

}());
