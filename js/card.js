; (function ($) {
    "use strict"
    // adjest header height
        var proQty = $('.pro-qty');
        //var proQy = $('.price-col span');
        proQty.prepend('<span class="dec qtybtn">-</span>');
        proQty.append('<span class="inc qtybtn">+</span>');

        proQty.on('click', '.qtybtn', function () {
            var $button = $(this);
            var oldValue = $button.parent().find('input').val();
            if ($button.hasClass('inc')) {
                var newVal = parseFloat(oldValue) + 1;
            } else {
                // Don't allow decrementing below zero
                if (oldValue > 0) {
                    var newVal = parseFloat(oldValue) - 1;
                } else {
                    newVal = 0;
                }
            }
            $button.parent().find('input').val(newVal);
        });
        // 
        $(window).on('load', function () {
            $(".loader").fadeOut();
            $("#preloder").delay(200).fadeOut("slow");
        $('.featured__controls li').on('click', function () {
                $('.featured__controls li').removeClass('active');
                $(this).addClass('active');
            });
            if ($('.featured__filter').length > 0) {
                var containerEl = document.querySelector('.featured__filter');
                var mixer = mixitup(containerEl);
            }
    
            });


        // nav active
        $('.nav-sec ul li').on('click', function () {
            $('.nav-sec li').removeClass('active');
            $(this).addClass('active');
     });
})(jQuery)
