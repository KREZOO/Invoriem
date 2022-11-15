$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        dots: false,
        loop: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                margin: 250,
            },
            601: {
                items: 2,
                margin: 50,
            },
            1001: {
                items: 3,
                margin: 48,
            },
        },
    });
});

/*Mobile Nav*/
const openNavBtn = document.querySelector('#openMobileNav')
const closeNavBtn = document.querySelector('#closeMobileNav')
const mobileNav = document.querySelector('#mobileNav')

openNavBtn.onclick = function () {
    mobileNav.classList.remove('none')
    /*document.body.classList.add('no-scroll')*/
}

closeNavBtn.onclick = function () {
    mobileNav.classList.add('none')
    /*document.body.classList.remove('no-scroll')*/
}

/*Video*/
const videoBtn = document.querySelector('#video-btn');
const videoBtnMobile = document.querySelector('#video-btn-2');
const videoPicture = document.querySelector('.video__picture');
const videoWrapper = document.querySelector('.video');
const video = document.querySelector('#video-file');

videoWrapper.addEventListener('click', function () {
    if (video.paused) {
        videoPicture.classList.add('hidden');
        videoWrapper.classList.remove('video-overlay')
        videoBtn.classList.add('none');
        videoBtnMobile.classList.add('hidden');
        video.play()
    } else {
        videoBtn.classList.remove('none');
        videoBtnMobile.classList.remove('hidden');
        videoWrapper.classList.add('video-overlay')
        video.pause()
    }
})
