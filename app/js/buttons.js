//button  wihtmouseover hover
$(function(){
	var e, t, i, o;
	$('.buttonwithmouseover').mouseover(function(n) {
		var a = !1;
		if (!a) {
			if (0 != $(this).find(".buttonhover").length) return;
			$(this).prepend("<div class='buttonhover'></div>"),
			(e = $(this).find(".buttonhover")).removeClass("drop"),
            e.height() ||
                e.width() ||
                ((t = Math.max(
                    $(this).outerWidth(),
                    $(this).outerHeight()
                )),
                e.css({
                    height: t,
                    width: t,
                })),
            (i = n.pageX - $(this).offset().left - e.width() / 2),
            (o = n.pageY - $(this).offset().top - e.height() / 2),
            e.css({
                top: o + "px",
                left: i + "px",
            })
            .addClass("drop"),
            (a = !0);
		}
	}),
	$('.buttonwithmouseover').mouseleave(function(e) {
		$(this)
        .find(".buttonhover")
        .remove();
	});
});

//button with animated text
$(".buttonanimatetext").each(function () {
	var text = $(this).text();
	var spannedText = '<span class="falling-animation">' + text + '</span>';
	$(this).html(spannedText + spannedText);
});

var words = document.getElementsByClassName('falling-animation');
  
for (var i = 0; i < words.length; i++) {
	splitLetters(words[i]);
}
  
function changeWord() {
	if ($(this).hasClass("animation-locked")) {
		return;
	} else {
		$(this).addClass("animation-locked");
	}
  
	var frontLetters = $($(this).find(".falling-animation")[0]).find(".letter");
	var behindLetters = $($(this).find(".falling-animation")[1]).find(".letter");
  
	if ($(this).find(".letter.in").length !== 0) {
		frontLetters = $(this).find(".letter.in");
		behindLetters = $(this).find(".letter.out");
	}
  
	for (var i = 0; i < frontLetters.length; i++) {
	  	animateLetterOut(frontLetters, i);
	}
  
	for (var i = 0; i < behindLetters.length; i++) {
		behindLetters[i].className = 'letter behind';
		behindLetters[0].parentElement.style.opacity = 1;
		animateLetterIn(behindLetters, i);
	}
  
	var $this = $(this);
		setTimeout(function () {
			$this.removeClass("animation-locked");
		}, 340 + behindLetters.length * 80);
  	}
  
	function animateLetterOut(cw, i) {
		setTimeout(function () {
		cw[i].className = 'letter out';
		}, i * 80);
	}
  
	function animateLetterIn(nw, i, button) {
		setTimeout(function () {
		nw[i].className = 'letter in';
	}, 340 + i * 80);
}
  
function splitLetters(word) {
	var content = word.innerHTML;
	word.innerHTML = '';
	var letters = [];
  
	for (var i = 0; i < content.length; i++) {
		var letter = document.createElement('span');
		letter.className = 'letter';
		letter.innerHTML = content.charAt(i);
		word.appendChild(letter);
		letters.push(letter);
	}
  
	$(".letter").html(function () {
	  	return $(this).html().replace(" ", "&nbsp;");
	});
}
$(".buttonanimatetext").on("mouseenter", changeWord);

/* ScrollTo */
(function() {
    $.fn.scrollto = function(options) {
        var settings = $.extend(
            {
                trigger: '#ScrollTo',
                scroll_to: '.bannerblock',
                speed: 1000,
                offset: 0
            },
            options
        );
        $(settings.trigger).click(function(event) {
            event.preventDefault();
            $('html, body').animate(
                {
                    scrollTop:
                        $(settings.scroll_to).offset().top + settings.offset
                },
                settings.speed
            );
        });
    };
})();
$('#ScrollTo').scrollto({
    trigger: '#ScrollTo',
    scroll_to: '.bannerblock',
    speed: 1000
});

  // copy to clipboard
  
  // function fallbackCopyTextToClipboard(text) {
  //       var textArea = document.createElement("textarea");
  //       textArea.value = text;
  //       
  //       // Avoid scrolling to bottom
  //       textArea.style.top = "0";
  //       textArea.style.left = "0";
  //       textArea.style.position = "fixed";
  //     
  //       document.body.appendChild(textArea);
  //       textArea.focus();
  //       textArea.select();
  //     
  //       try {
  //         var successful = document.execCommand('copy');
  //       } catch (err) {
  //         console.error('Fallback: Oops, unable to copy', err);
  //       }
  //     
  //       document.body.removeChild(textArea);
  //       return successful
  //     }
	
  //   export default function copyTextToClipboard(text) {
  //       if (!navigator.clipboard) {
  //         return fallbackCopyTextToClipboard(text);
  //       }
  //       return navigator.clipboard.writeText(text);
  //     }
	
  //   import copyTextToClipboard from './copyToClipboard';
	
  //   $(function() {
  //       $('.copyLink').on('click', function () {
  //           copyTextToClipboard($(this).data('clipboard-text')).then(
  //               () => {
  //                   console.log('success');
  //                   // any other success animations?
  //               }
  //           ).catch( error => {
  //              console.error(error) 
  //           });
  //       })
  //   })