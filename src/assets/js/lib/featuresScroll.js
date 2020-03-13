//Header Scroll Fixed
import $ from 'jquery';

$(document).ready(function () {
    var $header = $("header"),
            $clone = $header.before($header.clone().addClass("clone"));

    $(window).on("scroll", function () {
        var fromTop = $(window).scrollTop();
        $("body").toggleClass("down", (fromTop > 400));
    });
});

$(window).scroll(function () {
    //Show this only window screen size is > 760
    if(screen.width > 760){
    if ($("#wtFeaturesSectionHealth")[0].getBoundingClientRect().top > 50 && $("#wtFeaturesSectionHealth")[0].getBoundingClientRect().top < 350) {
        $("#wtFeaturesSectionHealth").find(".scroll-fixed-hidden").removeClass("scroll-fixed-hidden").addClass("scroll-fixed");
    } else {
        $("#wtFeaturesSectionHealth").find(".scroll-fixed").removeClass("scroll-fixed").addClass("scroll-fixed-hidden");
    }

    if ($("#wtFeaturesSectionInsurance")[0].getBoundingClientRect().top > 50 && $("#wtFeaturesSectionInsurance")[0].getBoundingClientRect().top < 350) {
        $("#wtFeaturesSectionInsurance").find(".scroll-fixed-hidden").removeClass("scroll-fixed-hidden").addClass("scroll-fixed");
    } else {
        $("#wtFeaturesSectionInsurance").find(".scroll-fixed").removeClass("scroll-fixed").addClass("scroll-fixed-hidden");
    }

    if ($("#wtFeaturesSectionResource")[0].getBoundingClientRect().top > 50 && $("#wtFeaturesSectionResource")[0].getBoundingClientRect().top < 350) {
        $("#wtFeaturesSectionResource").find(".scroll-fixed-hidden").removeClass("scroll-fixed-hidden").addClass("scroll-fixed");
    } else {
        $("#wtFeaturesSectionResource").find(".scroll-fixed").removeClass("scroll-fixed").addClass("scroll-fixed-hidden");
    }
}
});
