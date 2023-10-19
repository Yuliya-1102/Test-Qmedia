function checkWebP(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
};

checkWebP(function (support) {
    if (support) {
        //Do what you whant =)
        document.querySelector('body').classList.add('webp');
    } else {
        //Do what you whant =)
        document.querySelector('body').classList.add('no-webp');
    }

});


let swiper = new Swiper(".myswiper", {
    direction: "vertical",
    slidesPerView: "auto",
    freeMode: true,
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
    mousewheel: true,
  });


const mobileBurger = document.querySelector('.header__mobile-burger');
const wrapperMobile = document.querySelector('.wrapper__mobile');
const headerNav = document.querySelector('.header__nav');
const headerButtons = document.querySelector('.header__buttons');

function changeBurger() {
    mobileBurger.classList.toggle("burger--active");
    wrapperMobile.classList.toggle("burger--active");
    headerNav.classList.toggle("burger--active");
    headerButtons.classList.toggle("burger--active");
}
mobileBurger.addEventListener('click', changeBurger);

const lang = document.getElementById('lang');
const langValue = document.querySelector('.lang-value');

function changeLang() {
    langValue.innerHTML === 'EN' ?  langValue.innerHTML = 'RU' :  langValue.innerHTML = 'EN';
    
}
lang.addEventListener('click', changeLang);