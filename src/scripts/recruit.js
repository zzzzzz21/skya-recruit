import Disclosure from "./modules/disclosure";
import InitYoutube from "./modules/initYouTube";
import MicroModal from 'micromodal';
import Swiper from 'swiper';
import { Navigation} from 'swiper/modules';

const links = document.head.getElementsByTagName("link");
let isSpStyleLoaded = false;
for (let i = 0; i < links.length; i++) {
  const link = links[i];

  // <link>タグがCSSファイルを指しているか、及びそのhref属性が特定のパスを含むかチェック
  if (link.getAttribute("rel") === "stylesheet") {
    const href = link.getAttribute("href");
    if (href.includes("/css/sp/")) {
      console.log("hogehoge");
      isSpStyleLoaded = true;
      break;
    }
  }
}




document.addEventListener("DOMContentLoaded", function () {
  MicroModal.init({
    disableScroll: true,
  });

  document.querySelectorAll('.js-swiper-top').forEach((element) => {

    if(isSpStyleLoaded) {
      // eslint-disable-next-line no-new
      new Swiper(element, {
        loop: true,
        autoHeight: true,
        speed: 1000,
        autoplay: {
          delay: 5000,
        },
      });
    } else {
      element.classList.remove('swiper');
      const wrapper = element.querySelector('.swiper-wrapper');
      wrapper.classList.remove('swiper-wrapper');
      wrapper.querySelectorAll('.swiper-slide').forEach((element) => {
        element.classList.remove('swiper-slide');
      });

      const clone = wrapper.cloneNode(true);
      wrapper.parentNode.insertBefore(clone, wrapper.nextSibling);

    }

  });

  if(isSpStyleLoaded) {
    document.querySelectorAll('.js-swiper-slide').forEach((element) => {
      // eslint-disable-next-line no-new
      new Swiper(element, {
        modules: [Navigation],
        loop: true,
        centeredSlides : true,
        slidesPerView:'auto',
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    })
  }



  document.querySelectorAll('.js-disclosure').forEach((element) => {
    const instance = new Disclosure(element);
    instance.init();
  });

  const initYouTubeElements = document.querySelectorAll('.js-initYouTube');
  if(initYouTubeElements.length > 0) {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  initYouTubeElements.forEach((element) => {
    const instanse = new InitYoutube(element);
    instanse.init();
  });
});
