import Disclosure from "./modules/disclosure";
import InitYoutube from "./modules/initYouTube";
import MicroModal from 'micromodal';
import Swiper from 'swiper';

document.addEventListener("DOMContentLoaded", function () {
  MicroModal.init({
    disableScroll: true,
  });

  // eslint-disable-next-line no-new
  new Swiper('.js-swiper-top', {
    loop: true,
    autoHeight: true,
    direction: "vertical",
    speed: 1000,
    autoplay: {
      delay: 5000,
    },
  });

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
