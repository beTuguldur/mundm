$(document).ready(function(){
			$(".navigation .navbar .logo-toggle-container .toggle-box").click(function(){
				$(".navigation .menu").stop().slideToggle();
			});
		});

$(document).ready(function(){
			$(".cnavigation .cnavbar .clogo-toggle-container .ctoggle-box").click(function(){
				$(".cnavigation .cmenu").stop().slideToggle();
			});
		});
$(document).ready(function(){
	$(".knavigation .knavbar .klogo-toggle-container .ktoggle-box").click(function(){
		$(".knavigation .kmenu").stop().slideToggle();
	});
});

ScrollReveal({
	distance: '20px',
	duration: 2500,
});

ScrollReveal().reveal('.logo-toggle-container', { delay: 1000, origin:'top'});
ScrollReveal().reveal('.base-header-image', { delay: 50, origin:'top'});
ScrollReveal().reveal('.sec-1 .base-header', { delay: 50, origin:'top'});
ScrollReveal().reveal('.sec-1 .base-pic-container', { delay: 50, origin:'left'});
ScrollReveal().reveal('.sec-1 .base-text-container', { delay: 50, origin:'right'});
ScrollReveal().reveal('.sec-2 .base-header', { delay: 50, origin:'top'});
ScrollReveal().reveal('.sec-2 .base-pic-container', { delay: 50, origin:'right'});
ScrollReveal().reveal('.sec-2 .base-text-container', { delay: 50, origin:'left'});
ScrollReveal().reveal('.base-rectangle', { delay: 50, origin:'bottom'});
ScrollReveal().reveal('.pro-card', { delay: 50, origin:'left'});
ScrollReveal().reveal('.pro-text-border', { delay: 50, origin:'right'});

ScrollReveal().reveal('.news1', { delay: 500, origin:'left'});
ScrollReveal().reveal('.news2', { delay: 500, origin:'right'});
