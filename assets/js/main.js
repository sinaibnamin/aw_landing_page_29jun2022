window.addEventListener("load", () => {
    if (document.getElementById("main").classList.remove("hide"), !document.getElementById("main").classList.contains("hide")) {
        let sliderAutoPlayDuration = 3000;
        // cross platform hero slide
        let isHeroUserControl = false;
        let changeHeroSlide;
        let crossPlatformHeroContentSwiper = new Swiper(".crossPlatformHeroContentSwiper", {
            loop: true,
            slidesPerView: 1,
            allowTouchMove: false,
            spaceBetween: 40
        });
        let crossPlatformHeroSwiper = new Swiper(".crossPlatformHeroSwiper", {
            preloadImages: false,
            lazy: {
                loadPrevNext: false,
                checkInView: true
            },
            slidesPerView: 1,
            loop: true,
            effect: "fade",
            spaceBetween: 40,
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
            allowTouchMove: false,
            on: {
                lazyImageReady: async function (s) {
                    crossPlatformHeroSwiper.params.lazy = false;
                    if (isHeroUserControl == false) {
                        for (let i = 2; i <= 6; i++) {
                            const getSlide = await crossPlatformHeroSwiper.slides[i].querySelector("img");
                            // console.log(getSlide)
                            getSlide.src = getSlide.getAttribute('data-src')
                            if (i === 6) {
                                changeHeroSlide = setInterval(function () {
                                    if (isHeroUserControl === false) {
                                        crossPlatformHeroSwiper.slideNext()
                                        crossPlatformHeroContentSwiper.slideNext()
                                    } else {
                                        clearInterval(changeHeroSlide);
                                    }
                                }, sliderAutoPlayDuration)
                            }
                        }
                    }
                },
            }
        });
        document.querySelector(".crossPlatformHeroSwiper .swiper-pagination").addEventListener("click", (function () {
            isHeroUserControl = true;
            crossPlatformHeroContentSwiper.slideTo(crossPlatformHeroSwiper.activeIndex)
        }));

        // takeover slide
        let isTakeoverUserControl = false;
        let changeTakeoverSlide;
        let takeoverContentSwiper = new Swiper(".takeoverContentSwiper", {
            loop: true,
            slidesPerView: 1,
            allowTouchMove: false,
            spaceBetween: 40
        });
        let takeoverSwiper = new Swiper(".takeoverSwiper", {
            preloadImages: false,
            lazy: {
                loadPrevNext: false,
                checkInView: true
            },
            slidesPerView: 1,
            loop: true,
            effect: "fade",
            spaceBetween: 40,
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
            allowTouchMove: false,
            on: {
                lazyImageReady: async function (s) {
                    takeoverSwiper.params.lazy = false;
                    if (isTakeoverUserControl == false) {
                        for (let i = 2; i <= 6; i++) {
                            const getSlide = await takeoverSwiper.slides[i].querySelector("img");
                            getSlide.src = getSlide.getAttribute('data-src')
                            if (i === 6) {
                                changeTakeoverSlide = setInterval(function () {
                                    if (isTakeoverUserControl === false) {
                                        takeoverSwiper.slideNext()
                                        takeoverContentSwiper.slideNext()
                                    } else {
                                        clearInterval(changeTakeoverSlide);
                                    }
                                }, sliderAutoPlayDuration)
                            }
                        }
                    }
                },
            }
        });
        document.querySelector(".takeoverSwiper .swiper-pagination").addEventListener("click", (function () {
            isTakeoverUserControl = true;
            takeoverContentSwiper.slideTo(takeoverSwiper.activeIndex)
        }));
        // App BGI slide
        let appBGISwiperAutoPlay = true;
        let appBGISwiper = new Swiper(".appBGISwiper", {
            preloadImages: false,
            lazy: true,
            loop: true,
            autoplay: false,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                disableOnInteraction: false
            },
            allowTouchMove: false,
            on: {
                afterInit: async function () {
                    // console.log('slide after init')
                    // start
                    let currentActiveIndex = await this.activeIndex;
                    const appendVideo = await (
                        this.slides[currentActiveIndex].querySelector(".videoWrapper").innerHTML = `<video autoplay muted playsinline poster="./assets/img/appBGI/app_bgi_slide${currentActiveIndex}_poster.png">
                                <source src="./assets/video/appBGI/app_bgi_slide${currentActiveIndex}.mp4" type="video/mp4">
                            </video>`
                    )
                    const t = await this.slides[currentActiveIndex].querySelector("video");
                    t.onended = function (e) {
                        if (!t.paused) return t.pause();
                        appBGISwiperAutoPlay && setTimeout((function () {
                            return appBGISwiper.slideNext()
                        }), 1e3)
                    }
                    // end
                },
            },
        });

        appBGISwiper.on('slideChange', async function () {
            console.log('slide change')
            // start
            let currentActiveIndex = await this.activeIndex;
            const appendVideo = await (
                this.slides[currentActiveIndex].querySelector(".videoWrapper").innerHTML = `<video autoplay muted playsinline poster="./assets/img/appBGI/app_bgi_slide${currentActiveIndex < 7 ? currentActiveIndex : 1}_poster.png">
                        <source src="./assets/video/appBGI/app_bgi_slide${currentActiveIndex < 7 ? currentActiveIndex : 1}.mp4" type="video/mp4">
                    </video>`
            )
            const t = await this.slides[currentActiveIndex].querySelector("video");
            t.onended = function (e) {
                if (!t.paused) return t.pause();
                appBGISwiperAutoPlay && setTimeout((function () {
                    return appBGISwiper.slideNext()
                }), 1e3)
            }
            // if(!this.slides[currentActiveIndex].querySelector("video")){
            //     const appendVideo = await (
            //         this.slides[currentActiveIndex].querySelector(".videoWrapper").innerHTML = `<video controls autoplay muted playsinline poster="./assets/img/appBGI/app_bgi_slide${currentActiveIndex < 7 ? currentActiveIndex : 1}_poster.png">
            //             <source src="./assets/video/appBGI/app_bgi_slide${currentActiveIndex < 7 ? currentActiveIndex : 1}.mp4" type="video/mp4">
            //         </video>`
            //     )
            //     const t = await this.slides[currentActiveIndex].querySelector("video");
            //     t.onended = function(e) {
            //         if(!t.paused) return t.pause();
            //         appBGISwiperAutoPlay && setTimeout((function() {
            //             return appBGISwiper.slideNext()
            //         }), 1e3)
            //     }
            // }else{
            //     const t = await this.slides[currentActiveIndex].querySelector("video");
            //     t.currentTime = 0, t.controls = true, t.muted = true, t.play()
            //     t.onended = function(e) {
            //         if(!t.paused) return t.pause();
            //         appBGISwiperAutoPlay && setTimeout((function() {
            //             return appBGISwiper.slideNext()
            //         }), 1e3)
            //     }
            // }

            // end

        });
        document.querySelector(".appBGISwiper .swiper-pagination").addEventListener("click", (function () {
            appBGISwiperAutoPlay = false;
        }));
        // Animated banner slide
        let animatedBannerSwiperAutoPlay = true;
        let animatedBannerContentSwiper = new Swiper(".animatedBannerContentSwiper", {
            slidesPerView: 1,
            allowTouchMove: false,
            spaceBetween: 40,
            // loop:true
        }),
            animatedBannerSwiper = new Swiper(".animatedBannerSwiper", {
                preloadImages: false,
                lazy: true,
                // loop: true,
                slidesPerView: 1,
                effect: "fade",
                spaceBetween: 40,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true
                },
                allowTouchMove: false,
                autoplay: false,
                on: {
                    afterInit: async function () {
                        // console.log('slide after init')
                        // start
                        let currentActiveIndex = await this.activeIndex;

                        const appendVideo = await (
                            this.slides[currentActiveIndex].querySelector(".videoWrapper").innerHTML = `<video autoplay muted playsinline class="deviceContent" poster="./assets/img/animatedBanner/animatedBanner_slide${currentActiveIndex + 1}_poster.png">
                                <source src="./assets/video/animatedBanner/animatedBanner_slide${currentActiveIndex + 1}.mp4" type="video/mp4">
                            </video>`
                        )
                        const t = await this.slides[currentActiveIndex].querySelector("video");
                        t.onended = function (e) {
                            if (!t.paused) return t.pause();
                            animatedBannerSwiperAutoPlay && setTimeout((function () {
                                return (animatedBannerSwiper.slideNext(), animatedBannerContentSwiper.slideNext())
                            }), 1e3)
                        }
                        // end
                    },
                }
            });
        animatedBannerSwiper.on('slideChange', async function () {
            // console.log('slide change')
            // start
            let currentActiveIndex = await this.activeIndex;

            const appendVideo = await (
                this.slides[currentActiveIndex].querySelector(".videoWrapper").innerHTML = `<video autoplay muted playsinline class="deviceContent" poster="./assets/img/animatedBanner/animatedBanner_slide${currentActiveIndex + 1}_poster.png">
                         <source src="./assets/video/animatedBanner/animatedBanner_slide${currentActiveIndex + 1}.mp4" type="video/mp4">
                     </video>`
            )
            const t = await this.slides[currentActiveIndex].querySelector("video");
            t.onended = function (e) {
                if (!t.paused) return t.pause();
                animatedBannerSwiperAutoPlay && setTimeout((function () {
                    return (animatedBannerSwiper.slideNext(), animatedBannerContentSwiper.slideNext())
                }), 1e3)
            }
            // end

        });
        document.querySelector(".animatedBannerSwiper .swiper-pagination").addEventListener("click", (function () {
            animatedBannerSwiperAutoPlay = false;
            animatedBannerContentSwiper.slideTo(animatedBannerSwiper.activeIndex)
        }));
        // apiCreative swiper
        let isApiCreativeUserControl = false;
        let changeApiCreativeSlide;
        let apiCreativeSwiperSwiper = new Swiper(".apiCreativeSwiper", {
            preloadImages: false,
            lazy: {
                loadPrevNext: false,
                checkInView: true
            },
            slidesPerView: 1,
            loop: true,
            effect: "fade",
            spaceBetween: 40,
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
            allowTouchMove: false,
            on: {
                lazyImageReady: async function (s) {
                    apiCreativeSwiperSwiper.params.lazy = false;
                    if (isApiCreativeUserControl == false) {
                        for (let i = 2; i <= 5; i++) {
                            const getSlide = await apiCreativeSwiperSwiper.slides[i].querySelector("img");
                            getSlide.src = getSlide.getAttribute('data-src')
                            if (i === 5) {
                                changeApiCreativeSlide = setInterval(function () {
                                    if (isApiCreativeUserControl === false) {
                                        apiCreativeSwiperSwiper.slideNext()
                                    } else {
                                        clearInterval(changeApiCreativeSlide);
                                    }
                                }, sliderAutoPlayDuration)
                            }
                        }
                    }
                },
            }
        });
        document.querySelector(".apiCreativeSwiper .swiper-pagination").addEventListener("click", (function () {
            isApiCreativeUserControl = true;
        }));
        // apiCard swiper
        let isApiCardUserControl = false;
        let changeApiCardSlide;
        let apiCardSwiper = new Swiper(".apiCardSwiper", {
            preloadImages: false,
            lazy: {
                loadPrevNext: false,
                checkInView: true
            },
            slidesPerView: 3,
            loop: true,
            spaceBetween: 40,
            allowTouchMove: false,
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 30
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 30
                }
            },
            on: {
                lazyImageReady: async function (s) {
                    apiCardSwiper.params.lazy = false;
                    if (isApiCardUserControl == false) {
                        changeApiCardSlide = setInterval(function () {
                            if (isApiCardUserControl === false) {
                                apiCardSwiper.slideNext()
                            } else {
                                clearInterval(changeApiCardSlide);
                            }
                        }, sliderAutoPlayDuration)
                    }
                },
            }
        });

        document.querySelector(".apiCardSliderWrapper .swiper-button-prev").addEventListener("click", (function () {
            isApiCardUserControl = true;
            apiCardSwiper.slidePrev()
        }));
        document.querySelector(".apiCardSliderWrapper .swiper-button-next").addEventListener("click", (function () {
            isApiCardUserControl = true;
            apiCardSwiper.slideNext()
        }));
        // footer links
        let footerLinkHeadLineIcon = document.querySelectorAll(".footer-links h4 i"),
            footerLinkCollapsBody = document.querySelectorAll(".footer-links .collapse");
        footerLinkHeadLineIcon.forEach(e => {
            e.addEventListener("click", (function () {
                this.classList.contains("active") ? this.classList.remove("active") : this.classList.add("active")
            }))
        });
        var mediaQuery768 = window.matchMedia("(max-width: 767.98px)");
        const resetForMobile = () => {
            mediaQuery768.matches ? (footerLinkHeadLineIcon.forEach(e => {
                e.classList.contains("active") || e.classList.add("active")
            }), footerLinkCollapsBody.forEach(e => {
                e.classList.contains("show") && e.classList.remove("show")
            })) : (footerLinkHeadLineIcon.forEach(e => {
                e.classList.contains("active") && e.classList.remove("active")
            }), footerLinkCollapsBody.forEach(e => {
                e.classList.contains("show") || e.classList.add("show")
            }))
        };
        mediaQuery768.addListener(resetForMobile), window.onload = function () {
            resetForMobile()
        };

        !function () {
            function logElementEvent(eventName, element) { }
            var callback_enter, callback_exit, callback_loading, callback_loaded, callback_error, callback_finish, callback_cancel, lazyLoadInstance = new LazyLoad({
                class_applied: "lz-applied",
                class_loading: "lz-loading",
                class_loaded: "lz-loaded",
                class_error: "lz-error",
                class_entered: "lz-entered",
                class_exited: "lz-exited",
                callback_enter: function (element) { },
                callback_exit: function (element) { },
                callback_cancel: function (element) { },
                callback_loading: function (element) { },
                callback_loaded: function (element) { },
                callback_error: function (element) {
                    element.src = "https://via.placeholder.com/440x560/?text=Error"
                },
                callback_finish: function () {
                    document.documentElement
                }
            });
            lazyLoadInstance && lazyLoadInstance.update();
        }()
        // end main if
    }


});


(function () {
    "use strict";

    // Easy selector helper function
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }

    // Easy event listener function
    const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all)
        if (selectEl) {
            if (all) {
                selectEl.forEach(e => e.addEventListener(type, listener))
            } else {
                selectEl.addEventListener(type, listener)
            }
        }
    }

    // Easy on scroll event listener
    const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
    }

    // Navbar links active state on scroll
    let navbarlinks = select('#navbar .scrollto', true)
    let sectionTollpits = select('#sectionTooltipWrapper .scrollto', true)
    const navbarlinksActive = () => {
        let position = window.scrollY + 200
        let getSectionShorcutBar = select('#sectionShorcutBar')
        let selectHeader = select('#header')
        navbarlinks.forEach(navbarlink => {
            if (!navbarlink.hash) return
            let section = select(navbarlink.hash)
            if (!section) return
            if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                navbarlink.classList.add('active')
                if (navbarlink.classList.contains('ourCreativeLink')) {
                    selectHeader.style.background = "var(--navColorSecondary)"
                    getSectionShorcutBar.classList.add('active')
                } else {
                    selectHeader.style.background = "var(--navColorPrimary)"
                    getSectionShorcutBar.classList.remove('active')
                }
            } else {
                navbarlink.classList.remove('active')
            }
        })

        sectionTollpits.forEach(tooltipLinks => {
            if (!tooltipLinks.hash) return
            let section = select(tooltipLinks.hash)
            if (!section) return
            if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                tooltipLinks.classList.add('active')
            } else {
                tooltipLinks.classList.remove('active')
            }
        })
    }
    window.addEventListener('load', navbarlinksActive)
    onscroll(document, navbarlinksActive)

    // Scrolls to an element with header offset
    const scrollto = (el) => {
        let header = select('#header')
        let offset = header.offsetHeight

        let elementPos = select(el).offsetTop
        window.scrollTo({
            top: elementPos - offset,
            behavior: 'smooth'
        })
    }
    // Back to top button
    let backtotop = select('.back-to-top')
    if (backtotop) {
        const toggleBacktotop = () => {
            if (window.scrollY > 100) {
                backtotop.classList.add('active')
            } else {
                backtotop.classList.remove('active')
            }
        }
        window.addEventListener('load', toggleBacktotop)
        onscroll(document, toggleBacktotop)
    }

    // Mobile nav toggle
    on('click', '.mobile-nav-toggle', function (e) {
        select('#navbar').classList.toggle('navbar-mobile')
        this.classList.toggle('bi-list')
        this.classList.toggle('bi-x')
    })

    // Mobile nav dropdowns activate
    on('click', '.navbar .dropdown > a', function (e) {
        if (select('#navbar').classList.contains('navbar-mobile')) {
            e.preventDefault()
            this.nextElementSibling.classList.toggle('dropdown-active')
        }
    }, true)

    // Scrool with ofset on links with a class name .scrollto
    on('click', '.scrollto', function (e) {
        if (select(this.hash)) {
            e.preventDefault()
            let navbar = select('#navbar')
            if (navbar.classList.contains('navbar-mobile')) {
                navbar.classList.remove('navbar-mobile')
                let navbarToggle = select('.mobile-nav-toggle')
                navbarToggle.classList.toggle('bi-list')
                navbarToggle.classList.toggle('bi-x')
            }
            scrollto(this.hash)
        }
    }, true)

    // Animation on scroll
    window.addEventListener('load', () => {
        AOS.init({
            duration: 1000,
            once: true,
            mirror: false
        })

        select('#scrollToCreative').classList.add("aos-init","aos-animate");

    });

    // Preloader
    let preloader = select('#preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            preloader.remove()
        });
    }

})()

const setAdItem = geturl => {

const desktopAlertPopup = document.querySelector('#desktopAlertPopup')

if (document.documentElement.clientWidth < 1025) {
  if (geturl.match("takeover")) {
    desktopAlertPopupopen()
    return
  }
  if (geturl.match("animatedBanner")) {
    if (geturl.match("slide1")) {
      desktopAlertPopupopen()
      return
    }
    if (geturl.match("slide2")) {
      desktopAlertPopupopen()
      return
    }
    if (geturl.match("slide7")) {
      desktopAlertPopupopen()
      return
    }
    if (geturl.match("slide8")) {
      desktopAlertPopupopen()
      return
    }
    window.open(`./awBanner/${geturl}/ad.html`)
    return
  }

  if (geturl.match("crossPlatformHero")) {
    window.open(`./awBanner/${geturl}/ad.html`)
    return
  }
  if (geturl.match("apiCreative")) {
    if (geturl.match("slide2")) {
      desktopAlertPopupopen()
      return
    }
    window.open(`./awBanner/${geturl}/ad.html`)
    return
  }


}



    window.open(`./awBanner/${geturl}/index.html`)
};





function desktopAlertPopupopen(){
  desktopAlertPopup.classList.add('active')
}
function desktopAlertPopupClose(){
  desktopAlertPopup.classList.remove('active')
}
