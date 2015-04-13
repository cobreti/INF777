(function() {

    $(document).ready( function() {

        var mapSrc = "https://www.google.com/maps/embed/v1/place?key=AIzaSyCFxrfOI16P5XfsCnpZUAUb16ydFlvFq6U&q=4101+Molson+Montreal+H1Y3L1&attribution_source=Google+Maps+Embed+API";

        function updateMapFrame() {
            var mapTile = $(".map");
            var mapFrame = mapTile.find('#google-map');

            mapFrame.attr('width', mapTile.width());
            mapFrame.attr('height', mapTile.height());
            mapFrame.attr('src', mapSrc);
        }

        $(window).on('orientationchange', function() {
            updateMapFrame();
        });

        updateMapFrame();


        var infoTileContent = $('.info-tile .info-content').clone();

        var scheduleInfoContent = $('.schedule-tile .info-content-placeholder');
        scheduleInfoContent.append(infoTileContent);
    });

}());
