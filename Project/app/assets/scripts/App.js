import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';

let mobileMenu = new MobileMenu();
new RevealOnScroll(document.querySelectorAll(".exp"), 75);
new RevealOnScroll(document.querySelectorAll(".service__card"), 60);

if (module.hot) {
    module.hot.accept()
}