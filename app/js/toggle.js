// dropdown with checkbox
$(function(){
    $(".togglecontent-dropdowncheckbox-dropdown").click(function(e){
        $(this).find(".icon").toggleClass("active");
        $(this).siblings(".togglecontent-dropdowncheckbox-list").toggleClass("active");
    });
});
$(document).on('change','.__checkbox input',function() {
    if($(this).is(':checked')) {
        $(this).parent().addClass('__checked');
    } else {
        $(this).parent().removeClass('__checked');
    }
});
$('.__checkboxes input:checked').parent().addClass('__checked');


// language toggle
$(function () {
    $(".langItem").each(function () {
        var langSwitch = $(this).find('.langToggle');
        var englishLang = $(this).find('.langEnglish');
        var welshLang = $(this).find('.langWelsh');
//         langSwitch.on('change', function () {
//             if ($(this).prop('checked')) {
//                 window.location.href = englishLang.attr('href');
//             } else {
//                 window.location.href = welshLang.attr('href');
//             }
//         });
        langSwitch.change(function () {
            englishLang.toggleClass('__active');
            welshLang.toggleClass('__active');
        });
        englishLang.click(function () {
            langSwitch.prop('checked', true);
            englishLang.addClass('__active');
            welshLang.removeClass('__active');
        });
        welshLang.click(function () {
            langSwitch.prop('checked', false);
            englishLang.removeClass('__active');
            welshLang.addClass('__active');
        });
    });
});
  
// table toggle
$(function(){
    $(".collapserow").on("click", function(){
        var headerId = $(this).data("collapse-header");
        $('.fold[data-collapse-row=' + headerId + ']').toggleClass('__active');
        $(this).find(".withicon").toggleClass("__active");
    });
});