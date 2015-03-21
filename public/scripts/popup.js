(function() {

    $(document).ready( function() {

        var popupAnchor = $('<div></div>');
        var bodyLocation = $('.body-location');
        var headerLocation = $('.header-location');
        var popupOverlay = null;
        var popupBox = null;

        $('body').append(popupAnchor);

        popupAnchor.load(window.location.origin + '/fragments/popup.html', function() {

            popupOverlay = popupAnchor.find('.popup-overlay');
            popupBox = popupOverlay.find('.popup-content-box');
            popupBox.detach().appendTo(popupAnchor);
        });


        $('.popup-link').on('click', function(evt) {

            if (popupOverlay) {
                showPopup($(this));
            }

            evt.preventDefault();
        });

        function bodyHeight() {
            return headerLocation.height() + bodyLocation.height();
        }

        function bodyWidth() {
            return bodyLocation.width();
        }

        function showPopup(anchor) {

            var tile = anchor.parents('.tile');
            var body = $('body');
            var closeBtn = popupBox.find('.popup-content-box-close');
            var popupContent = popupBox.find('.popup-content');

            popupOverlay.show();
            popupBox.show();
            popupOverlay.height( bodyLocation[0].scrollHeight );
            bodyLocation.css('overflow-y', 'hidden');

            console.log(anchor.position());
            console.log(anchor.offset());

            var contentPos = anchor.offset();
            //contentPos.left += 50;
            //contentPos.top += 50;

            var bottom = contentPos.top + popupBox.height();
            var right = contentPos.left + popupBox.width();

            popupBox.width( Math.min(bodyWidth()-100, popupBox.width()));
            popupBox.height( Math.min(bodyHeight()-100, popupBox.height()));

            if ( bottom > bodyHeight() ) {
                contentPos.top = Math.max(bodyHeight() - popupBox.height(), 50);
            }

            if ( right > body.width() ) {
                contentPos.left = Math.max(bodyWidth() - popupBox.width(), 50);
            }

            popupBox.offset(contentPos);
            popupContent.empty();
            popupContent.load( anchor[0].href, function() {

                closeBtn.on('click', function(evt) {

                    closeBtn.off('click');
                    popupOverlay.hide();
                    popupBox.hide();
                    bodyLocation.css('overflow-y', 'auto');
                    evt.preventDefault();
                });
            });
        }


    });
}());
