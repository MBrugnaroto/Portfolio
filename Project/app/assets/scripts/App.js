import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import InfoPortfolio from './modules/InfoPortfolio';

let infoPortfolio = new InfoPortfolio("portfolio__project-container__info--open", "portfolio__project-container__info--close");
let mobileMenu = new MobileMenu();

new RevealOnScroll(document.querySelectorAll(".exp"), 75, "reveal-item--is-visible-exp");
new RevealOnScroll(document.querySelectorAll(".service__card"), 70, "reveal-item--is-visible-service");


if (module.hot) {
    module.hot.accept()
}