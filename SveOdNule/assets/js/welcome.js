$(document).on('scroll', function(){
    $('.first-half-extra').css("top", Math.min(0 + 0.35*window.scrollY, 100) + "px");
    $('.second-half-extra').css("bottom", Math.min(100 + 0.35*window.scrollY, 200) + "%");
})