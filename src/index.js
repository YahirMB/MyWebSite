//css
import './styles.css';
import './styles/tecnologies.css';
import './styles/projects.css';
import './styles/experiences.css';
import './styles/contact.css';

//js
import './js/experience.js'
import './js/projectsCarousel.js'


window.onload = function () {
  Particles.init({
    selector: ".background"
  });
};
const particles = Particles.init({
  selector: ".background",
  color: ["#03c1da", "#00FF90"],
  connectParticles: false,
  responsive: [
    {
      breakpoint: 768,
      options: {
        color: ["#faebd7", "#03dac6", "#ff0266"],
        maxParticles: 70,
        connectParticles: false,
        size: 0
      }
    }
  ]
});

class Navigation {

  constructor() {
    this.currentId = null;
    this.currentTab = null;
    this.tabContainerHeight = 70;
    this.lastScroll = 0;
    let self = this;
    $(".nav-tab").click(function () {
      self.onTabClick(event, $(this));
    });
    $(window).scroll(() => {
      this.onScroll();
    });
  }

  onTabClick(event, element) {
    event.preventDefault();
    let scrollTop =
      $(element.attr("href")).offset().top - this.tabContainerHeight + 1;
    $("html, body").animate({ scrollTop: scrollTop }, 600);
  }

  onScroll() {
    this.checkHeaderPosition();
    this.lastScroll = $(window).scrollTop();
  }

  checkHeaderPosition() {
    const headerHeight = 0;
    if ($(window).scrollTop() > headerHeight) {
      $(".nav-container").addClass("nav-container--scrolled");
    } else {
      $(".nav-container").removeClass("nav-container--scrolled");
    }
    let offset = $(".nav").offset().top + $(".nav").height() - this.tabContainerHeight - headerHeight;
    if (
      $(window).scrollTop() > this.lastScroll &&
      $(window).scrollTop() > offset
    ) {
      $(".nav-container").addClass("nav-container--move-up");
      $(".nav-container").removeClass("nav-container--top-first");
      $(".nav-container").addClass("nav-container--top-second");
    } else if (
      $(window).scrollTop() < this.lastScroll &&
      $(window).scrollTop() > offset
    ) {
      $(".nav-container").removeClass("nav-container--move-up");
      $(".nav-container").removeClass("nav-container--top-second");
      $(".nav-container-container").addClass("nav-container--top-first");
    } else {
      $(".nav-container").removeClass("nav-container--move-up");
      $(".nav-container").removeClass("nav-container--top-first");
      $(".nav-container").removeClass("nav-container--top-second");
    }
  }
}

new Navigation();



//open menu mobile 

const $btnMenu = $("#btnMenu");
const $btnMenuClose = $("#btnMenu-close");
const $menuContainer = $("#menu-mobile");


$btnMenu.on("click", (e) => {

  $btnMenu.css("display", 'none');
  $menuContainer.addClass("menu-in");
})

$btnMenuClose.on("click", (e) => {
  $btnMenu.css("display", 'block');
  $menuContainer.removeClass("menu-in");
})

$menuContainer.on("click", (e) => {
  if (e.target === $menuContainer[0]) return;
  $menuContainer.removeClass("menu-in");
  $btnMenu.css("display", 'block');
})
