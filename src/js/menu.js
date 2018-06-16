$(function() {
				$('nav#menu').mmenu({
					extensions	: [ 'theme-dark','fx-panels-slide-100' ],
					setSelected	: true,
					counters	: true,
					searchfield : {
						placeholder		: 'Search menu items'
					},
					panels		: {
						add 		: true,
						size		: 60,
					},
					sidebar		: {
						collapsed		: {
							use 			: '(min-width: 40px)', 
							size			: 60,
							hideNavbar		: true,
							blockMenu		: true
						}
//						expanded		: {
//							use 			: '(min-width: 3000px)',
//							size			: 35
//						}
					},
					navbars		: [
						{
							content		: [ 'searchfield' ]
						}, {
							type		: 'tabs',
							content		: [ 
								'<a href="#panel-menu"><i class="fa fa-bars"></i> <span>Menu</span></a>'
							]
						}, {
							content		: [ 'prev', 'breadcrumbs', 'close' ]
						}, {
							position	: 'bottom',
							content		: [ '<a>This is a test sidebar</a>' ]
						}
					]
				}, {
					searchfield : {
						clear 		: true
					},
					navbars		: {
						breadcrumbs	: {
							removeFirst	: true
						}
					}
				});

				$('a[href^="#/"]').click(function() {
					alert( 'Thank you for clicking, but that\'s a demo link' );
					return false;
				})
	
			});