import "@fortawesome/fontawesome-free/css/fontawesome.min.css";
import "@fortawesome/fontawesome-free/css/brands.min.css";
import "../styles/main.scss";

import $ from "jquery";
import Typed from "typed.js";
import tilt from "tilt.js";

export default class App {
  constructor() {
    this.backgrounds = [];
    this.intervalBgCarrousel = null;
    this.tilted = null;
    this.mobile = this.isDevice(/Android|iPhone|iPad/g);
    this.getElements();
    this.initComponents();
    if (this.mobile) {
      this.initServiceWorker();
      this.mobileEvents();
    } else {
      this.addEvents();
    }
    this.exitLoader();
    window.onload = this.readyLoad.bind(this);
  }

  getElements() {
    this.cursor = $(".cursor");
    this.favicon = $("#favicon");
    this.info = $(".info");
    this.typed = $(".typed");
    this.picture = $(".picture");
    this.bg = $(".bg");
    this.links = $(".link");
    this.linksDev = $(".link-dev");
    this.linksPhotographer = $(".link-photographer");
    // After Load
    // this.rlPicDev = $('#picture-dev--rl')
    this.rlPicPhotographer = $("#picture-photographer--rl");
    this.rlBgDev = $("#bg-dev--rl");
    // this.rlBgMedium = $('#bg-medium--rl')
    this.rlBgPhotographer = $("#bg-photographer--rl");
    this.rlBgInstagram = $("#bg-instagram--rl");
    this.rlBgFacebook = $("#bg-facebook--rl");
    this.rlFavDev = $("#fav-dev--rl");
    this.rlFavPhotographer = $("#fav-photographer--rl");
  }

  initComponents() {
    this.typedComponent = new Typed(this.typed.get(0), {
      strings: [
        "Dev. Front-end &#x1F468;&#x1F4BB;",
        "Photographer &#x1F4F7;",
        "Gamer &#x1F3AE;"
      ],
      loop: true,
      typeSpeed: 50,
      backDelay: 1500
    });
    if (!this.mobile) {
      this.initTilt();
    }
  }

  initTilt() {
    this.tilted = this.info.tilt({
      maxTilt: 10,
      scale: 1,
      perspective: 400
    });
    this.info.addClass("tilt");
  }

  destroyTilt() {
    this.tilted.tilt.destroy.call(this.tilted);
    this.info.removeClass("tilt");
    this.tilted = null;
  }

  linkResize() {
    $(window).on("resize", this.updateResize.bind(this));
  }

  updateResize(e) {
    if (this.isDevice(/Android|iPhone|iPad/g)) {
      $(".cursor").addClass("hidden");
      if (!this.mobile) {
        this.destroyTilt();
        $(`*:not(.${this.info.attr("class")})`).unbind();
        this.mobileEvents();
        this.mobile = true;
      }
    } else {
      clearInterval(this.intervalBgCarrousel);
      $(".cursor").removeClass("hidden");
      if (this.mobile) {
        this.bg.attr("class", "bg");
        $(`*:not(.${this.info.attr("class")})`).unbind();
        this.addEvents();
        this.initTilt();
        this.mobile = false;
      }
    }
  }

  // Desktop
  addEvents() {
    this.linkCursor();
    this.linkCursorHover();
    this.linksActions();
    this.linksDevActions();
    this.linksPhotographerActions();
  }

  linkCursor() {
    $("html").on("mousemove", this.updateCursor.bind(this));
  }

  updateCursor(e) {
    this.cursor.attr(
      "style",
      "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
    );
  }

  linkCursorHover() {
    $("a").on("mouseover", this.updateCursorHover.bind(this));
    $("a").on("mouseout", this.updateCursorHover.bind(this));
  }

  updateCursorHover(e) {
    if (e.type == "mouseover") {
      this.cursor.removeClass("is-hovered");
      this.cursor.addClass("is-hover");
      return;
    }
    this.cursor.removeClass("is-hover");
    this.cursor.addClass("is-hovered");
  }

  exitLoader() {
    $(".loader").addClass("hidden");
    $(".tag").removeClass("hidden");
    $(".info").removeClass("hidden");
    if (!this.isDevice(/Android|iPhone|iPad/g)) {
      $(".cursor").removeClass("hidden");
    }
  }

  changeFavicon(favico) {
    this.favicon.attr("href", favico);
  }

  changeBackground(cssClass) {
    if (this.bg.hasClass("bg-in")) {
      return;
    }
    cssClass = cssClass ? `bg bg-image bg-in ${cssClass}` : "bg";
    this.bg.attr("class", cssClass);
  }

  // - Default
  linksActions() {
    this.links.on("mouseout", this.updateToDefault.bind(this));
  }

  updateToDefault() {
    this.picture.attr("src", "assets/rodrigocichetto-default.jpg");
    this.changeFavicon("assets/favicon.ico");
    this.bg.removeClass("bg-in");
    this.bg.addClass("bg-out");
    setTimeout(this.changeBackground.bind(this), 500);
  }

  // - Dev
  linksDevActions() {
    this.linksDev.on("mouseover", this.updateToDev.bind(this));
  }

  updateToDev(el) {
    // this.picture.attr('src', 'assets/rodrigocichetto-dev.jpg')
    this.changeFavicon("assets/favicon-dev.ico");
    if (el.currentTarget.dataset.bg) {
      this.changeBackground(el.currentTarget.dataset.bg);
      return;
    }
    this.changeBackground("bg-dev");
  }

  // - Photographer
  linksPhotographerActions() {
    this.linksPhotographer.on(
      "mouseover",
      this.updateToPhotographer.bind(this)
    );
  }

  updateToPhotographer(el) {
    this.picture.attr("src", "assets/rodrigocichetto-photo.jpg");
    this.changeFavicon("assets/favicon-photographer.ico");
    if (el.currentTarget.dataset.bg) {
      this.changeBackground(el.currentTarget.dataset.bg);
      return;
    }
    this.changeBackground("bg-photographer");
  }

  // Mobile
  initServiceWorker() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("service-worker.js")
        .then(reg => {})
        .catch(err => {});
    }
  }

  mobileEvents() {
    this.picture.on("touchstart", this.changePicture.bind(this));
    this.intervalBgCarrousel = window.setInterval(
      this.backgroundCarrousel.bind(this),
      5000
    );
  }

  backgroundCarrousel() {
    this.bg.removeClass("bg-out");
    if (!this.backgrounds.length) {
      this.backgrounds = [
        "bg-instagram",
        "bg-facebook",
        "bg-photographer",
        "bg-dev"
      ];
    }
    let cssClass = this.backgrounds[
      Math.floor(Math.random() * this.backgrounds.length)
    ];
    this.backgrounds.splice(this.backgrounds.indexOf(cssClass), 1);
    this.bg.attr("class", `bg bg-image bg-in ${cssClass} ${cssClass}--mobile`);
    window.setTimeout(() => this.bg.removeClass("bg-in"), 2000);
    window.setTimeout(() => this.bg.addClass("bg-out"), 4500);
  }

  changePicture() {
    this.picture.addClass("scale-animation");
    setTimeout(() => this.picture.removeClass("scale-animation"), 1000);
    if (this.picture.attr("src").indexOf("default") != -1) {
      this.picture.attr("src", "assets/rodrigocichetto-photo.jpg");
      return;
    }
    this.picture.attr("src", "assets/rodrigocichetto-default.jpg");
  }

  // ReadyLoad
  readyLoad() {
    this.linkResize();
    this.lazyLoad();
  }

  lazyLoad() {
    // this.rlPicDev.src = 'assets/rodrigocichetto-dev.jpg'
    this.rlPicPhotographer.src = "assets/rodrigocichetto-photo.jpg";
    this.rlBgDev.addClass("bg-dev");
    // this.rlBgMedium.addClass('bg-medium')
    this.rlBgPhotographer.addClass("bg-photographer");
    this.rlBgInstagram.addClass("bg-instagram");
    this.rlBgFacebook.addClass("bg-facebook");
  }

  isDevice(regex) {
    return regex.test(navigator.userAgent);
  }
}
