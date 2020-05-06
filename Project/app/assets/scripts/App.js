import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu';

new MobileMenu();

if (module.hot) {
    module.hot.accept()
}