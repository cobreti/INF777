(function() {

    $(document).ready( function() {

        function updateMapFrame() {
            var mapTile = $(".map");
            var mapFrame = mapTile.find('#google-map');

            mapFrame.attr('width', mapTile.width());
            mapFrame.attr('height', mapTile.height());
        }

        window.addEventListener('onrientationchange', updateMapFrame);

        updateMapFrame();
    });

}());
