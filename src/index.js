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
  connectParticles: true,
  responsive: [
    {
      breakpoint: 768,
      options: {
        color: ["#faebd7", "#03dac6", "#ff0266"],
        maxParticles: 43,
        connectParticles: false
      }
    }
  ]
});

class NavigationPage {
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
    $(window).resize(() => {
      this.onResize();
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
    this.findCurrentTabSelector();
    this.lastScroll = $(window).scrollTop();
  }

  onResize() {
    if (this.currentId) {
      this.setSliderCss();
    }
  }

  checkHeaderPosition() {
    const headerHeight = 0;
    if ($(window).scrollTop() > headerHeight) {
      $(".nav-container").addClass("nav-container--scrolled");
    } else {
      $(".nav-container").removeClass("nav-container--scrolled");
    }
    let offset =
      $(".nav").offset().top +
      $(".nav").height() -
      this.tabContainerHeight -
      headerHeight;
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

  findCurrentTabSelector(element) {
   
    let newCurrentId;
    let newCurrentTab;
    let self = this;
    $(".nav-tab").each(function () {
      let id = $(this).attr("href");    
      let offsetTop = $(id)[0].offsetTop - self.tabContainerHeight;
      let offsetBottom = $(id)[0].offsetTop + $(id).height() - self.tabContainerHeight;
      
      if (
        $(window).scrollTop() > offsetTop &&
        $(window).scrollTop() < offsetBottom
      ) {
        newCurrentId = id;
        newCurrentTab = $(this);      
      }
    });

    if (this.currentId != newCurrentId || this.currentId === null) {
      this.currentId = newCurrentId;
      this.currentTab = newCurrentTab;
      this.setSliderCss();
    }

  }

  setSliderCss() {
    let width = 0;
    let left = 0;
    if (this.currentTab) {
    
      width = this.currentTab.css("width");
      left = this.currentTab.offset().left;
    }
    $(".nav-tab-slider").css("width", width);
    $(".nav-tab-slider").css("left", left);
  }
}

new NavigationPage();

//typing effect

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Back-end", "Front-end"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  }
  else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  }
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () { // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});