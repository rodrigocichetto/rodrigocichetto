import '@fortawesome/fontawesome-free/css/fontawesome.min.css'
import '@fortawesome/fontawesome-free/css/brands.min.css'
import './styles/main.scss'

import Typed from 'typed.js'
import Rx from 'rx-dom'

export default class App {
    constructor() {
        this.getElements()
        this.initComponents()
        this.addEvents()
    }

    getElements() {
        this.favicon = document.querySelector('#favicon')
        this.typed = document.querySelector('.typed')
        this.links = document.querySelectorAll('.link')
        this.linksDev = document.querySelectorAll('.link-dev')
        this.linksPhotographer = document.querySelectorAll('.link-photographer')
    }

    initComponents() {
        this.typedComponent = new Typed(this.typed, {
            strings: [
                'Dev. Front-end &#x1F468;&#x1F4BB;', 
                'Photographer &#x1F4F7;',
                'Gamer &#x1F3AE;'
            ],
            loop: true,
            typeSpeed: 50,
            backDelay: 1500
        })
    }
    
    addEvents() {
        this.linksActions()
        this.linksDevActions()
        this.linksPhotographerActions()
    }

    changeFavicon(favico) {
        this.favicon.setAttribute('href', favico)
    }

    // Default
    linksActions() {
        Rx.DOM.mouseout(this.links).subscribe(
            this.updateToDefault.bind(this)
        )
    }

    updateToDefault() {
        this.changeFavicon('assets/favicon.ico')
    }

    // Dev
    linksDevActions() {
        Rx.DOM.mouseover(this.linksDev).subscribe(
            this.updateToDev.bind(this)
        )
    }

    updateToDev() {
        this.changeFavicon('assets/favicon-dev.ico')
    }

    // Photographer
    linksPhotographerActions() {
        Rx.DOM.mouseover(this.linksPhotographer).subscribe(
            this.updateToPhotographer.bind(this)
        )
    }

    updateToPhotographer() {
        this.changeFavicon('assets/favicon-photographer.ico')
    }
}

const app = new App()