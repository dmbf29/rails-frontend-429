import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Become a dinosaur", "He's your friend and a whole lot more"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
