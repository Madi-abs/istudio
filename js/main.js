document.addEventListener("DOMContentLoaded", function () {
  const slider = new Swiper(".swiper-container", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
      clickable: false,
    },

    loop: true,

    effect: "slide",

    autoplay: {
      delay: 10000,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    parallax: true,

    speed: 1000,

    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },

    observer: true,
    observeParents: true,
    observeSlideChildren: true,

    watchOverflow: true,

    slidesPerView: "auto",

    init: false,

    on: {
      init: function () {
        menuSlider();
      },

      slideChange: function () {
        menuSliderRemove();
        menuLinks[slider.realIndex].classList.add("menu__link-active");
      },
    },
  });

  // перемещение по ссылкам меню
  let menuLinks = document.querySelectorAll(".nav__link");

  function menuSlider() {
    if (menuLinks.length > 0) {
      menuLinks[slider.realIndex].classList.add("nav__link-active");

      for (let i = 0; i < menuLinks.length; i++) {
        const menuLink = menuLinks[i];

        menuLink.addEventListener("click", function (e) {
          menuSliderRemove();

          slider.slideTo(i, 800);
          menuLink.classList.add("nav__link-active");
          e.preventDefault();
        });
      }
    }
  }

  function menuSliderRemove() {
    let menuLinkActive = document.querySelector(".nav__link-active");

    if (menuLinkActive) {
      menuLinkActive.classList.remove("nav__link-active");
    }
  }

  slider.init();

  // Мобильное бургер-меню
  const navbarMobile = document.querySelector(".navbar-toggle");
  const navList = document.querySelector(".nav__list");

  if (navbarMobile) {
    navbarMobile.addEventListener("click", function (e) {
      navbarMobile.classList.toggle("navbar-toggle--active");
      navList.classList.toggle("nav__list--active");
    });
  }
});

   
