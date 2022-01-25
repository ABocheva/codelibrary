// const { on } = require("gulp");

// load fonts

// WebFont.load({
//     google: { // add &display=swap to end of every font family
//         families: ['Inter:400,500,600&display=swap']
//     },
//     //,
//     // typekit: {
//     // id: 'XXXX'
//     // },
//     active: function() { // helps stop flash of unstyled text
//         sessionStorage.fontsLoaded = true 
//     }
// });
  
//sticky on scroll
$(window).scroll(function(){
	var sticky = $('.header');
    var scroll = $(window).scrollTop();
	if (scroll >= 80) sticky.addClass('__sticky');
    else sticky.removeClass('__sticky');
});

// tabs for noticeboard slider
$('.Tabs').each(function (i, tab) {
	var tabRoot = $(this);
	var tabTrigger = '.TabTrigger';
	var tabContent = '.TabContent';
	var findTabTrigger = tabRoot.find(tabTrigger);
	var findTabContent = tabRoot.find(tabContent);
	findTabTrigger.attr('aria-selected', false);
	findTabContent.attr('aria-expanded', false);
	findTabTrigger.eq(0).addClass('__active').attr('aria-selected', true);
	findTabContent.eq(0).addClass('__active').attr('aria-expanded', true);
	findTabTrigger.click(function (e) {
		e.preventDefault();
		var dataSet = $(this).data('set');
		tabRoot.find(tabTrigger + '.__active').attr('aria-selected', false).removeClass('__active');
		$(this).attr('aria-selected', true).addClass('__active');
		tabRoot.find(tabContent + '.__active').attr('aria-expanded', false).removeClass('__active');
		tabRoot.find(tabContent + '[data-set="' + dataSet + '"]').attr('aria-expanded', true).addClass('__active');
	});
});

// labeshrink on form 
$(document).on('focus', '.__labelshrink input', function() {
	$(this).parent().parent().addClass('__selected');
});
$(document).on('blur', '.__labelshrink input', function() {
	if(!$(this).val()) {
		$(this).parent().parent().removeClass('__selected');
	}
});
$('.labelshrink input').each(function(){
	if ($(this).val()) {
		$(this).parent().parent().addClass('__selected');
	}
});
$(document).on('focus', '.__labelshrink textarea', function() {
  	$(this).parent().parent().addClass('__selected');
});
$(document).on('blur', '.__labelshrink textarea', function() {
	if(!$(this).val()) {
		$(this).parent().parent().removeClass('__selected');
	}
});
$('.labelshrink textarea').each(function(){
	if ($(this).val()) {
		$(this).parent().parent().addClass('__selected');
	}
});

/* scroll animations plugin */
$(function() {
	$.fn.animateIn = function(options) {
		return this.each(function() {
			var settings = $.extend(
				{
					//default settings
					offset: 0,
					modifier: '__in'
				},
				options
			);
			var item = $(this);
			var itemOffsetTop = $(this).offset().top;
			var triggerVal = itemOffsetTop + settings.offset;

			function animateBlock(scrollTop) {
				// if element is already in view or check if it comes into view
				if (
					scrollTop + $(window).outerHeight() >= triggerVal ||
					$(window).outerHeight() >= triggerVal
				) {
					item.addClass(settings.modifier);
				}
			}

			$(window).scroll(function() {
				var scrollTop = $(window).scrollTop();
				animateBlock(scrollTop);
			});
			$(window).scroll();
		});
	};
});
$(window).on('load', function(){
	setTimeout(function(){
		$('.__animate').animateIn({
			offset: 0,
			modifier: '__animatein'
		});
		$('.__animateleft').animateIn({
			offset: 0,
			modifier: '__animatein'
		});
		$('.__animateright').animateIn({
			offset: 0,
			modifier: '__animatein'
		});
		$('.__animatenow').animateIn({
			offset: 0,
			modifier: '__animatein'
		});
		$('.__animatetop').animateIn({
			offset: 0,
			modifier: '__animatein'
		});
		$('.__animatefade').animateIn({
			offset: 0,
			modifier: '__animatein'
		});
		// overlayimage
		$('.__overlayimageout').animateIn({
			offset:0,
			modifier: '__overlayimagein'
		});
	});
});

// wave on banner animation and parralax effect
$(window).scroll(function(){

	$('.wave').each(function(){
		$(this).css('transform', 'translate(0, 0)');
		var scrollTop = $(window).scrollTop();
		var wavesFromTop = $(this).offset().top;
		var browserHeight = $(window).height();
		var wavesTransform = ((browserHeight - scrollTop) / wavesFromTop / 2);
		var waveAnimate = 'scale(1, '+ wavesTransform + ')';
		$(this).css('transform', 'translate3d(0, 0, 0)' + waveAnimate);
	});

	$('.decorimage').each(function(){
		if ($(this).offset().top = $(window).scrollTop()) {
			var difference = $(window).scrollTop() - $(this).offset().top;
			var half = (difference / 10) + 'px';
			var transform = 'translate3d(0, ' + half + ', 0)';
			$(this).find('img').css('transform', transform);
		} else {
			$(this).find('img').css('transform', 'translate3d(0, 0, 0)');
		}
	});
});
