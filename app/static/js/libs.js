// SWIPER SLIDER
var swiper3 = new Swiper(".dol-home", {
    centeredSlides: true,
    navigation: {
        nextEl: ".dol-home .fa-chevron-right",
        prevEl: ".dol-home .fa-chevron-left",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    spaceBetween: 30,
    slidesPerView: 1.1,
    breakpoints: {
        860: {
            slidesPerView: 1.8,
        },
    },
});

var swiper = new Swiper(".dol-items", {
    slidesPerView: 2,
    spaceBetween: 20,
    navigation: {
        nextEl: ".dol-items .fa-chevron-right",
        prevEl: ".dol-items .fa-chevron-left",
    },
    breakpoints: {
        860: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
    },
});

var swiper5 = new Swiper(".runi-screens_mini", {
    slidesPerView: 2,
    spaceBetween: 20,
    navigation: {
        nextEl: ".runi-screens_mini .fa-chevron-right",
        prevEl: ".runi-screens_mini .fa-chevron-left",
    },
    breakpoints: {
        860: {
            slidesPerView: 5,
        },
    },
});

var swiper = new Swiper(".runi-screens", {
    spaceBetween: 10,
    effect: "fade",
    thumbs: {
        swiper: swiper5,
    },
});

// MODAL v0.2
$(document).ready(function() { 
    $('a[name=modal]').click(function(e) {
        e.preventDefault();
        var modal = $(this).attr('href');
        $(modal).fadeIn(100);
        $('.e-overlay').fadeIn(100);
    });
    $('.modal > i, .modal-close').click(function (e) {
        e.preventDefault();
        $('.modal, .e-overlay').fadeOut(100);
    }); 
    $("a[href='#reg'], a[href='#lost']").click(function () {
        $("#login").fadeOut(100);
    });
});


// HEADER SEARCH
$(".header-search_icon, .header-search .fa-xmark").click(function () {
    $('.header-search').toggleClass('active');
});

$(document).on("click", function (e) {
    if (!$(e.target).closest(".header-search").length) {
        $(".header-search").removeClass("active");
    }
    e.stopPropagation();
});

// HEADER USER
$('.header-user').on('click', function(){
	$('.header-user').toggleClass('active');
});

$(document).on("click", function (e) {
    if (!$(e.target).closest(".header-user").length) {
        $(".header-user").removeClass("active");
    }
    e.stopPropagation();
});

// CATALOG MENU
$(".catalog-btn").on("click", function () {
    $(".catalog, .catalog-btn").toggleClass("active");
});
$(".catalog-sub a").on("click", function () {
    $(this).toggleClass("active");
});
$(document).on("click", function (e) {
    if (!$(e.target).closest("header").length) {
        $(".catalog, .catalog-btn").removeClass("active");
    }
    e.stopPropagation();
});

// MOBILE MENU
$("body").append('<div class="overlay hidden"></div>');

$('.mobmenu-btn').on('click', function(){
	$('.mobmenu, .mobmenu-btn, .overlay').toggleClass('active');
});

$(".header-menu_sub a").on("click", function () {
    $(this).toggleClass("active");
});

$(document).on("click", function (e) {
    if (!$(e.target).closest("header").length) {
        $(".mobmenu, .mobmenu-btn, .overlay").removeClass("active");
    }
    e.stopPropagation();
});

// SHARE 
$(".ann-full_share").on('click', function(){
	$(this).toggleClass('active');
});

// COMMENT DET
$('.dle-comm_det').on('click', function(){
	$(this).toggleClass('active');
});

$(document).on("click", function (e) {
    if (!$(e.target).closest(".dle-comm_det").length) {
        $(".dle-comm_det.active").removeClass("active");
    }
    e.stopPropagation();
});

// AVATAR COLOR
$('img[src*="/dleimages/noavatar.png"]:not(.dpm-header-profile img)').each(function(){
    var $this = $(this);
    var altText = $this.attr('alt');
    if (altText) {
        var firstLetter = altText.charAt(0);
        var gradients = ["linear-gradient(rgb(182, 148, 249), rgb(108, 97, 223))","linear-gradient(rgb(255, 152, 0), rgb(255, 87, 51))","linear-gradient(rgb(0, 174, 204), rgb(0, 90, 204))"];
        var randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
        $this.replaceWith('<div class="dle-avatar" style="background:' + randomGradient + '">' + firstLetter + '</div>');
    }
});

// FULL TEXT
$('.expand-text').each(function() {
    var a = $(this), b = parseFloat(a.css('line-height')), c = a.data('rows'), d = a.outerHeight(), h = b*c;
    if ( d > h ) {
        a.attr('style', '-webkit-line-clamp: '+c+'').after('<a class="expand-btn">Развернуть текст</a>');
    };
});

$(document).on('click', '.expand-btn', function() {
    $(this).prev().removeClass('line-clamp').removeAttr('style'); 
    $(this).remove();
});

// TABS
$(".tabs-content").not(":first").css("display", "none");
$(".tabs-links").on("click", "span", function() {
    var $tabs = $(this).closest(".tabs");
    var index = $(this).index();
    $tabs.find(".tabs-links span").removeClass("active");
    $(this).addClass("active");
    $tabs.find(".tabs-content").css("display", "none");
    $tabs.find(".tabs-content").eq(index).css("display", "");
});