jQuery(document).ready(function () {
    if (jQuery(window).width() < 991) {
        jQuery('.footer__wrap .footer__title').click(function () {
            jQuery(this).toggleClass('active')
            jQuery(this).next().slideToggle(200)
        })
    }
})