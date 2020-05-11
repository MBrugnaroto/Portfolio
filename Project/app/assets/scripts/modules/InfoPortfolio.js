class InfoPortfolio {
    constructor (open, close) {
        this.open = open;
        this.close = close;
        this.viewIcon = document.querySelector(".portfolio__project--view");
        this.contentInfo = document.querySelector(".portfolio__project-container__info");
        this.closeIcon = document.querySelector(".portfolio__project-container__info--icon")
        this.events();
    }

    events() {
        this.viewIcon.addEventListener("click", () => this.info(this.open, this.close));
        this.closeIcon.addEventListener("click", () => this.info(this.close, this.open));
    }

    info(insertClass, removeClass) {
        this.contentInfo.classList.remove(removeClass);
        this.contentInfo.classList.toggle(insertClass);
    }
}

export default InfoPortfolio;