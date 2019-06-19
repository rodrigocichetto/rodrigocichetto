import '@fortawesome/fontawesome-free/css/fontawesome.min.css'
import '@fortawesome/fontawesome-free/css/brands.min.css'
import '../styles/main.scss'

import $ from 'jquery'
import Typed from 'typed.js'
import tilt from 'tilt.js'

export default class App {

  constructor() {
    this.backgrounds = []
    this.mobile = false
    this.intervalBgCarrousel = null
    this.getElements()
    this.initComponents()
    if ((navigator.userAgent.indexOf('Android') != -1) || (navigator.userAgent.indexOf('iPhone') != -1)) {
      this.mobile = true
      this.initServiceWorker()
      this.mobileEvents()
    } else {
      this.addEvents()
    }
    this.commonEvents()
    this.exitLoader()
    window.onload = this.readyLoad.bind(this)
  }

  getElements() {
    this.cursor = $('.cursor')
    this.favicon = $('#favicon')
    this.info = $('.info')
    this.typed = $('.typed')
    this.picture = $('.picture')
    this.bg = $('.bg')
    this.links = $('.link')
    this.linksDev = $('.link-dev')
    this.linksPhotographer = $('.link-photographer')
    // After Load
    this.rlPicPhotographer = $('#picture-photographer--rl')
    this.rlBgDev = $('#bg-dev--rl')
    this.rlBgMedium = $('#bg-medium--rl')
    this.rlBgPhotographer = $('#bg-photographer--rl')
    this.rlBgInstagram = $('#bg-instagram--rl')
    this.rlBgFacebook = $('#bg-facebook--rl')
    this.rlFavDev = $('#fav-dev--rl')
    this.rlFavPhotographer = $('#fav-photographer--rl')
  }

  initComponents() {
    this.typedComponent = new Typed(this.typed.get(0), {
      strings: [
        'Dev. Front-end &#x1F468;&#x1F4BB;',
        'Photographer &#x1F4F7;',
        'Gamer &#x1F3AE;'
      ],
      loop: true,
      typeSpeed: 50,
      backDelay: 1500
    })
    this.info.tilt({ maxTilt: 3 })
  }

  commonEvents() {
    this.linkResize()
  }

  linkResize() {
    $(window).on('resize', this.updateResize.bind(this))
  }

  updateResize(e) {
    if (!this.mobile && $(document).width() < 576) {
      this.mobile = true
      $(`*:not(.${this.info.attr('class')})`).unbind()
      this.mobileEvents()
    }
    if (this.mobile && $(document).width() >= 576) {
      this.mobile = false
      clearInterval(this.intervalBgCarrousel)
      this.bg.attr('class', 'bg')
      this.info.tilt({ maxTilt: 3 })
      $(`*:not(.${this.info.attr('class')})`).unbind()
      this.addEvents()
    }
  }

  // Desktop
  addEvents() {
    this.linkCursor()
    this.linkCursorHover()
    this.linksActions()
    this.linksDevActions()
    this.linksPhotographerActions()
  }

  linkCursor() {
    $('html').on('mousemove', this.updateCursor.bind(this))
  }

  updateCursor(e) {
    this.cursor.attr("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
  }

  linkCursorHover() {
    $('a').on('mouseover', this.updateCursorHover.bind(this))
    $('a').on('mouseout', this.updateCursorHover.bind(this))
  }

  updateCursorHover(e) {
    if (e.type == 'mouseover') {
      this.cursor.removeClass('is-hovered')
      this.cursor.addClass('is-hover')
      return
    }
    this.cursor.removeClass('is-hover')
    this.cursor.addClass('is-hovered')
  }

  exitLoader() {
    $('.loader').addClass('hidden')
    $('.info').removeClass('hidden')
  }

  changeFavicon(favico) {
    this.favicon.attr('href', favico)
  }

  changeBackground(cssClass) {
    if (this.bg.hasClass('bg-in')) {
      return
    }
    cssClass = cssClass ? `bg bg-image bg-in ${cssClass}` : 'bg'
    this.bg.attr('class', cssClass)
  }

  // - Default
  linksActions() {
    this.links.on('mouseout', this.updateToDefault.bind(this))
  }

  updateToDefault() {
    this.picture.attr('src', 'assets/rodrigocichetto-default.jpg')
    this.changeFavicon('assets/favicon.ico')
    this.bg.removeClass('bg-in')
    this.bg.addClass('bg-out')
    setTimeout(this.changeBackground.bind(this), 500)
  }

  // - Dev
  linksDevActions() {
    this.linksDev.on('mouseover', this.updateToDev.bind(this))
  }

  updateToDev(el) {
    // this.bg.removeClass('bg-out')
    this.changeFavicon('assets/favicon-dev.ico')
    if (el.currentTarget.dataset.bg) {
      this.changeBackground(el.currentTarget.dataset.bg)
      return
    }
    this.changeBackground('bg-dev')
  }

  // - Photographer
  linksPhotographerActions() {
    this.linksPhotographer.on('mouseover', this.updateToPhotographer.bind(this))
  }

  updateToPhotographer(el) {
    // this.bg.removeClass('bg-out')
    this.picture.attr('src', 'assets/rodrigocichetto-photo.jpg')
    this.changeFavicon('assets/favicon-photographer.ico')
    if (el.currentTarget.dataset.bg) {
      this.changeBackground(el.currentTarget.dataset.bg)
      return
    }
    this.changeBackground('bg-photographer')
  }

  // Mobile
  initServiceWorker() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('service-worker.js')
        .then((reg) => {}).catch((err) => {});
    }
  }

  mobileEvents() {
    this.picture.onclick = this.changePicture.bind(this)
    this.intervalBgCarrousel = window.setInterval(this.backgroundCarrousel.bind(this), 5000)
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
    this.bg.attr('class', `bg bg-image ${cssClass} ${cssClass}--mobile`)
  }

  changePicture() {
    setTimeout(() => this.picture.removeClass('scale-animation'), 1000)
    this.picture.addClass('scale-animation')
    if (this.picture.src.indexOf('default') != -1) {
      this.picture.attr('src', 'assets/rodrigocichetto-photo.jpg')
      return
    }
    this.picture.attr('src', 'assets/rodrigocichetto-default.jpg')
  }

  // ReadyLoad
  readyLoad() {
    this.rlPicPhotographer.src = 'assets/rodrigocichetto-photo.jpg'
    this.rlBgDev.addClass('bg-dev')
    this.rlBgMedium.addClass('bg-medium')
    this.rlBgPhotographer.addClass('bg-photographer')
    this.rlBgInstagram.addClass('bg-instagram')
    this.rlBgFacebook.addClass('bg-facebook')
  }
}
