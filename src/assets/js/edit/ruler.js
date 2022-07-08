jQuery('.ruler__list').slick({
	infinite: false,
	slidesToShow: 5,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 424,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}
	]   
});
