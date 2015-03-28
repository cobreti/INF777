(function() {

    $(document).ready( function() {

        function updateMapFrame() {
            var mapTile = $(".map");
            var mapFrame = mapTile.find('#google-map');

            mapFrame.attr('width', mapTile.width());
            mapFrame.attr('height', mapTile.height());
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
