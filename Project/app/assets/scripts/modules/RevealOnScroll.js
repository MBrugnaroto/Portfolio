import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'

class RevealOnScroll {
    constructor (els, pagePorcents, classes) {
        this.itemsToReveal = els;
        this.browserHeight = window.innerHeight;
        this.pagePorcents = pagePorcents;
        this.classes = classes;
        this.hideInitially();
        this.scrollThrottle = throttle(this.calcCaller, 200).bind(this)
        this.events();
    }

    events() {
        window.addEventListener("scroll", this.scrollThrottle)
        window.addEventListener("resize", debounce( () => {
            console.log("Resize just ran")
            this.browserHeight = window.innerHeight;
        }, 333))
    }

    calcCaller() {
        this.itemsToReveal.forEach(el => {
            if (el.isRevealed == false) {
                this.calculateIfScrolledTo(el)
            }
        })
    }

    calculateIfScrolledTo(el) {
        if (window.scrollY + this.browserHeight > el.offsetTop) {
            let scrollPercent = (el.getBoundingClientRect().top / this.browserHeight) * 100
            if (scrollPercent < this.pagePorcents) {
                el.classList.add(this.classes)
                el.isRevealed = true;

                if (el.isLastItem) {
                    window.removeEventListener("scroll", this.scrollThrottle)
                }
            }
        }
    }
    hideInitially() {
        this.itemsToReveal.forEach(el => {
            el.classList.add("reveal-item")
            el.isRevealed = false;
        })

        this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true;
    }
}

export default RevealOnScroll;