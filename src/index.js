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
        window.onload = this.readyLoad.bind(this)
    }

    getElements() {
        this.favicon = document.querySelector('#favicon')
        this.typed = document.querySelector('.typed')
        this.bg = document.querySelector('.bg')
        this.links = document.querySelectorAll('.link')
        this.linksDev = document.querySelectorAll('.link-dev')
        this.linksPhotographer = document.querySelectorAll('.link-photographer')
        this.body = document.querySelector('body')
        // After Load
        this.rlBgDev = document.querySelector('#bg-dev--rl')
        this.rlBgMedium = document.querySelector('#bg-medium--rl')
        this.rlBgPhotographer = document.querySelector('#bg-photographer--rl')
        this.rlBgInstagram = document.querySelector('#bg-instagram--rl')
        this.rlFavDev = document.querySelector('#fav-dev--rl')
        this.rlFavPhotographer = document.querySelector('#fav-photographer--rl')
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

    changeBackground(cssClass) {
        cssClass = cssClass ? `bg bg-image ${cssClass}` : 'bg'
        this.bg.setAttribute('class', cssClass)
    }

    // Default
    linksActions() {
        Rx.DOM.mouseout(this.links).subscribe(
            this.updateToDefault.bind(this)
        )
    }

    updateToDefault() {
        // this.body.classList.remove(/bg-\w+/g)
        this.body.classList.remove('bg-dev')
        this.body.classList.remove('bg-photographer')
        this.changeFavicon('assets/favicon.ico')
        this.changeBackground()
    }

    // Dev
    linksDevActions() {
        Rx.DOM.mouseover(this.linksDev).subscribe(
            this.updateToDev.bind(this)
        )
    }

    updateToDev(el) {
        this.body.classList.add('bg-dev')
        this.changeFavicon('assets/favicon-dev.ico')
        if (el.currentTarget.dataset.bg) {
            this.changeBackground(el.currentTarget.dataset.bg)    
            return
        }
        this.changeBackground('bg-dev')
    }

    // Photographer
    linksPhotographerActions() {
        Rx.DOM.mouseover(this.linksPhotographer).subscribe(
            this.updateToPhotographer.bind(this)
        )
    }

    updateToPhotographer(el) {
        this.body.classList.add('bg-photographer')
        this.changeFavicon('assets/favicon-photographer.ico')
        if (el.currentTarget.dataset.bg) {
            this.changeBackground(el.currentTarget.dataset.bg)    
            return
        }
        this.changeBackground('bg-photographer')
    }

    // ReadyLoad
    readyLoad() {
        this.rlBgDev.classList.add('bg-dev')
        this.rlBgMedium.classList.add('bg-medium')
        this.rlBgPhotographer.classList.add('bg-photographer')
        this.rlBgInstagram.classList.add('bg-instagram')
    }
}

const app = new App()