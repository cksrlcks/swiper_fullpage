/*get section data-name*/
var menu = [];
var menuElment = document.querySelectorAll('.swiper-container.main-slider .swiper-slide.item');

Array.prototype.forEach.call(menuElment, function (el) {
    var menuName = el.getAttribute('data-name');
    menu.push(menuName);
})

var mainSwiper = new Swiper('.swiper-container.main-slider', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (menu[index]) + '</span>';
        },
    },
    mousewheel: true,
    direction: 'vertical',
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    loop: false,
    slidesPerView: 'auto',
    allowTouchMove: false,
    parallax: true,
    speed: 600,


})

mainSwiper.on('slideChange', function () {
    var idx = mainSwiper.activeIndex;
    var nextSlide = mainSwiper.slides[idx];
    var body = document.querySelector('body');
    if (nextSlide.classList.contains('black')) {
        body.classList.add('black-ui');
    } else {
        body.classList.remove('black-ui');
    }
})

var sec1_slide = new Swiper('.sec1-slide', {
    slidesPerView: 1,
    navigation: {
        nextEl: '.sec1-slide .control .next',
        prevEl: '.sec1-slide .control .prev',
    },
    loop: true,
    pagination: {
        el: '.sec1-slide .pagination',
        clickable: true
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false
    },
    loop: true,
    watchSlidesProgress: true

})

var sec3_slide = new Swiper('.sec3-slide', {
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 60,
    pagination: {
        el: '.sec3-slide .arrow .pagination',
        type: 'fraction',
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        }
    },
    navigation: {
        nextEl: '.sec3-slide .arrow .next',
        prevEl: '.sec3-slide .arrow .prev',
    },
    on: {
        init: function () {
            var swiper = this;
            for (var i = 0; i < swiper.slides.length; i++) {
                var duration = i * 200 + 500
                swiper.slides[i].setAttribute('data-swiper-parallax', '-300')
                swiper.slides[i].setAttribute('data-swiper-parallax-duration', duration);
            }
        }
    }

})