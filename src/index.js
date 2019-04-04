import '@fortawesome/fontawesome-free/css/fontawesome.min.css'
import '@fortawesome/fontawesome-free/css/brands.min.css'
import './styles/main.scss'

import Typed from 'typed.js'
import Rx from 'rx-dom'

export default class App {
    constructor() {
        this.backgrounds = []
        this.getElements()
        this.initComponents()
        if ((navigator.userAgent.indexOf('Android') != -1) || (navigator.userAgent.indexOf('iPhone') != -1)) {
            this.mobileEvents()
        } else {
            this.addEvents()
        }
        this.exitLoader()
        window.onload = this.readyLoad.bind(this)
    }

    getElements() {
        this.favicon = document.querySelector('#favicon')
        this.typed = document.querySelector('.typed')
        this.picture = document.querySelector('.picture')
        this.bg = document.querySelector('.bg')
        this.links = document.querySelectorAll('.link')
        this.linksDev = document.querySelectorAll('.link-dev')
        this.linksPhotographer = document.querySelectorAll('.link-photographer')
        this.body = document.querySelector('body')
        // After Load
        this.rlPicPhotographer = document.querySelector('#picture-photographer--rl')
        this.rlBgDev = document.querySelector('#bg-dev--rl')
        this.rlBgMedium = document.querySelector('#bg-medium--rl')
        this.rlBgPhotographer = document.querySelector('#bg-photographer--rl')
        this.rlBgInstagram = document.querySelector('#bg-instagram--rl')
        this.rlBgFacebook = document.querySelector('#bg-facebook--rl')
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

    exitLoader() {
        document.querySelector('.loader').classList.add('hidden')
        document.querySelector('.info').classList.remove('hidden')
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
        this.picture.src = 'assets/rodrigocichetto-default.jpg'
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
        this.picture.src = 'assets/rodrigocichetto-photo.jpg'
        this.changeFavicon('assets/favicon-photographer.ico')
        if (el.currentTarget.dataset.bg) {
            this.changeBackground(el.currentTarget.dataset.bg)    
            return
        }
        this.changeBackground('bg-photographer')
    }

    // Mobile
    mobileEvents() {
        this.picture.onclick = this.changePicture.bind(this)
        window.setInterval(this.backgroundCarrousel.bind(this), 5000)
    }

    backgroundCarrousel() {
        if (!this.backgrounds.length) {
            this.backgrounds = [
                'bg-instagram',
                'bg-facebook',
                'bg-photographer',
                'bg-dev',
                'bg-medium'
            ]
        }
        let cssClass = this.backgrounds[Math.floor(Math.random() * this.backgrounds.length)]
        this.backgrounds.splice(this.backgrounds.indexOf(cssClass), 1)
        this.bg.setAttribute('class', `bg bg-image ${cssClass} ${cssClass}--mobile`)
    }

    changePicture() {
        setTimeout(() => this.picture.classList.remove('scale-animation'), 1000)
        this.picture.classList.add('scale-animation')
        if (this.picture.src.indexOf('default') != -1) {
            this.picture.src = 'assets/rodrigocichetto-photo.jpg'
            return
        }
        this.picture.src = 'assets/rodrigocichetto-default.jpg'
    }

    // ReadyLoad
    readyLoad() {
        this.rlPicPhotographer.src = 'assets/rodrigocichetto-photo.jpg'
        this.rlBgDev.classList.add('bg-dev')
        this.rlBgMedium.classList.add('bg-medium')
        this.rlBgPhotographer.classList.add('bg-photographer')
        this.rlBgInstagram.classList.add('bg-instagram')
        this.rlBgFacebook.classList.add('bg-facebook')
    }
}

const app = new App()