// // Handle Header
const menu = document.querySelectorAll(".header .menu .menu__item a");
let sections = [];
function removeActiveMenu() {
  menu.forEach(function (menuItem2) {
    menuItem2.classList.remove("active");
  });
}
function handleMenu() {
  let heightHeader = document.querySelector(".header").offsetHeight;
  menu.forEach(function (menuItem, menuItemIndex) {
    // let menuItemHref = menuItem.getAttribute("href");
    // let replaceHref = menuItemHref.replace("#", "");
    // let section = document.querySelector(`#${replaceHref}`);
    menuItem.addEventListener("click", function (event) {
      // event.preventDefault();
      removeActiveMenu();
      menuItem.classList.add("active");
    });
  });
}
handleMenu();

// Handle Hamberger -> OK
const nav = document.querySelector(".header .nav ");
const hamberger = document.querySelector(".header .btn__menu");
function handleHamberger() {
  hamberger.addEventListener("click", function (event) {
    event.stopPropagation();
    hamberger.classList.toggle("active");
    nav.classList.toggle("active");
  });
  // Hide Nav khi W = 992px
  function hideNav() {
    hamberger.classList.remove("active");
    nav.classList.remove("active");
  }
  // Resize Window
  window.addEventListener("resize", function (event) {
    event.stopPropagation();
    let widthWindow = window.innerWidth;
    if (widthWindow >= 1200) {
      nav.classList.remove("active");
      hamberger.classList.remove("active");
    }
  });
}
function removeHamberger() {
  document.addEventListener("click", function () {
    hamberger.classList.remove("active");
    nav.classList.remove("active");
  });
}
removeHamberger();
handleHamberger();

// // Handle  Language -> OK
const language = document.querySelector(".header .language");
const languageItem = document.querySelectorAll(
  ".header .language .language__list .language__list-item"
);
let languageCurrent = document.querySelector(
  ".header .language .language__current"
);

function handleLanguage() {
  language.addEventListener("click", function (event) {
    event.stopPropagation();
    event.preventDefault();
    language.classList.toggle("active");
  });
}
handleLanguage();
function languageChangeText() {
  languageItem.forEach(function (langElement) {
    langElement.addEventListener("click", function () {
      let langText = langElement.textContent;
      let langCurrentPresent = languageCurrent.textContent;
      languageCurrent.innerHTML = langText;
      langElement.innerHTML = langCurrentPresent;
    });
  });
}
languageChangeText();
function removeLanguageList() {
  document.addEventListener("click", function () {
    language.classList.remove("active");
  });
}
removeLanguageList();

// // handle Progress Bar
const processBar = document.querySelector(".processbar");
function handleProcessBar() {
  window.addEventListener("scroll", function () {
    let scrollY = window.scrollY;
    let widthProcessBar =
      (scrollY / (document.body.offsetHeight - window.innerHeight)) * 100;
    processBar.style.width = `${widthProcessBar}%`;
  });
}
window.addEventListener("load", handleProcessBar());

// performance Map
const contactMap = document.querySelector(".main__contact .map");
const iframeMap = document.querySelector(".main__contact .map  iframe");
const resize = document.querySelector(".main__contact .map .active");
function map() {
  if (document.contains(contactMap)) {
    let dataIDMap = iframeMap.getAttribute("data-map-src");
    let widthWindow = window.innerWidth;
    window.addEventListener("resize", function (event) {
      window.addEventListener("scroll", function () {
        let heightHeaderMap = document.querySelector(".header").offsetHeight;
        let scrollYWindowMap = window.pageYOffset;
        let heightMap =
          contactMap.offsetTop - heightHeaderMap - contactMap.offsetHeight;
        if (scrollYWindowMap >= heightMap) {
          iframeMap.setAttribute(
            "src",
            `https://www.google.com/maps/embed?pb=${dataIDMap}`
          );
        }
        console.log(scrollYWindowMap);
        console.log(heightMap);
      });
    });
    if (widthWindow <= 1024) {
      window.addEventListener("scroll", function () {
        let heightHeaderMap = document.querySelector(".header").offsetHeight;
        let scrollYWindowMap = window.pageYOffset;
        let heightMap =
          contactMap.offsetTop -
          heightHeaderMap -
          contactMap.offsetHeight * 1.8;
        if (scrollYWindowMap >= heightMap) {
          iframeMap.setAttribute(
            "src",
            `https://www.google.com/maps/embed?pb=${dataIDMap}`
          );
        }
        console.log(scrollYWindowMap);
        console.log(heightMap);
      });
    }
    if (widthWindow <= 768) {
      window.addEventListener("scroll", function () {
        let heightHeaderMap = document.querySelector(".header").offsetHeight;
        let scrollYWindowMap = window.pageYOffset;
        let heightMap =
          contactMap.offsetTop - heightHeaderMap - contactMap.offsetHeight * 2;
        if (scrollYWindowMap >= heightMap) {
          iframeMap.setAttribute(
            "src",
            `https://www.google.com/maps/embed?pb=${dataIDMap}`
          );
        }
        console.log(scrollYWindowMap);
        console.log(heightMap);
      });
    }
  }
}
map();

function handleModalVideo() {
  let video = document.querySelector(".main__home .video3d .video3d__img svg "),
    popupModal = document.querySelector(".popupvideo"),
    iframeModalVideo = document.querySelector(
      ".popupvideo .popupvideo__inner .popupvideo__inner-iframe iframe"
    ),
    btnClose = document.querySelector(".popupvideo .popupvideo__inner .close");
  if (document.contains(video)) {
    video.addEventListener("click", function () {
      popupModal.classList.add("active");
      let dataID = video.getAttribute("data-video-src");
      iframeModalVideo.setAttribute(
        "src",
        ` https://www.youtube.com/embed/${dataID}?autoplay=1`
      );
    });
    // Close modal
    function closeModal() {
      //   // hide modal
      popupModal.classList.remove("active");
      //   // empty src iframe = mute
      iframeModalVideo.setAttribute("src", "");
    }
    // // Click close modal
    btnClose.addEventListener("click", function () {
      closeModal();
    });
    popupModal.addEventListener("click", function () {
      closeModal();
    });
  }
}
window.addEventListener("load", handleModalVideo());

// Slider -> OK
// handle slider
function handleSlider() {
  const hero = document.querySelector(".main__home .hero");
  if (document.contains(hero)) {
    var sliderFlickity = document.querySelector(" .hero .hero__list");
    var flktySlider = new Flickity(sliderFlickity, {
      // options
      cellAlign: "left",
      contain: true,
      lazyLoad: 3,
      wrapAround: true,
      draggable: ">1",
      prevNextButtons: false,
      pageDots: false,
      fade: true,
    });

    // // Btn control

    let btnPrev = document.querySelector(
      ".hero .hero__control .hero__control-left "
    );
    let btnNext = document.querySelector(
      ".hero .hero__control .hero__control-right"
    );
    btnPrev.addEventListener("click", function () {
      flktySlider.previous(true);
    });
    btnNext.addEventListener("click", function () {
      flktySlider.next(true);
    });
  }
}
window.addEventListener("load", handleSlider());

function handleReviewSlider() {
  const review = document.querySelector(".main__home .review");
  if (document.contains(review)) {
    var sliderReviewFlickity = document.querySelector(" .review .review__list");
    var flktySliderReview = new Flickity(sliderReviewFlickity, {
      // options
      cellAlign: "left",
      contain: true,
      lazyLoad: 1,
      wrapAround: true,
      draggable: ">1",
      prevNextButtons: false,
      pageDots: false,
      // autoPlay: 3000,
      fade: true,
    });
    let btnPrev = document.querySelector(
      ".review .review__control .review__control-prev "
    );
    let btnNext = document.querySelector(
      ".review .review__control .review__control-next"
    );
    btnPrev.addEventListener("click", function () {
      flktySliderReview.previous(true);
    });
    btnNext.addEventListener("click", function () {
      flktySliderReview.next(true);
    });
  }
}
handleReviewSlider();
// handle brand
function handleBrand() {
  const brand = document.querySelector(".main__home .brand");
  if (document.contains(brand)) {
    var brandSlider = document.querySelector(".brand .brand__list");
    var flktBrandSlider = new Flickity(brandSlider, {
      // options
      cellAlign: "left",
      contain: true,
      wrapAround: true,
      draggable: ">1",
      prevNextButtons: false,
      lazyLoad: 4,
      prevNextButtons: false,
      pageDots: false,
      pauseAutoPlayOnHover: true,
      freeScroll: true,
    });
    //  Scroll bar gallery
    // function handleProcessBarGallerySlider() {
    //   var progressBarBrand = document.querySelector(
    //     ".brand .brand__progessbar"
    //   );
    //   var flktyProgress = new Flickity(brandSlider, {});
    //   flktyProgress.on("scroll", function (progress) {
    //     progress = Math.max(0, Math.min(1, progress));
    //     progressBarBrand.style.width = progress * 100 + "%";
    //   });
    // }
    // handleProcessBarGallerySlider();
  }
}
window.addEventListener("load", handleBrand());
// backtotop
const backToTop = document.querySelector(".backtotop");
function handleBackToTop() {
  window.addEventListener("scroll", function () {
    if (window.pageYOffset >= 750) {
      backToTop.classList.add("active");
    } else {
      backToTop.classList.remove("active");
    }
  });
}
handleBackToTop();
function clickBacktoTop() {
  backToTop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
window.addEventListener("load", clickBacktoTop());

// Page About Us
function handleOurService() {
  let sectionOurService = document.querySelector(".main__service .ourservice");
  if (document.contains(sectionOurService)) {
    var ourservice = document.querySelector(".ourservice .ourservice__list");
    var flktyOurService = new Flickity(ourservice, {
      // options
      cellAlign: "center",
      contain: true,
      lazyLoad: 1,
      wrapAround: true,
      draggable: ">1",
      prevNextButtons: false,
      pageDots: true,
      freeScroll: false,
      // autoPlay: 3000,
    });
    window.addEventListener("resize", function (event) {
      event.stopPropagation();
      let widthWindow = window.innerWidth;
      if (widthWindow < 992) {
        var flktyOurService = new Flickity(ourservice, {
          // options
          contain: true,
          lazyLoad: 1,
          wrapAround: true,
          draggable: ">1",
          prevNextButtons: false,
          pageDots: true,
          freeScroll: false,
          cellAlign: "left",
        });
      } else {
        var flktyOurService = new Flickity(ourservice, {
          // options
          cellAlign: "center",
        });
      }
    });
  }
}
window.addEventListener("load", handleOurService());

function handleProcessBarOurService() {
  const sectionOurService = document.querySelector(
    ".main__aboutus .ourservice"
  );
  if (document.contains(sectionOurService)) {
    var progressBarOurService = document.querySelector(
      ".ourservice .ourservice__processbar "
    );
    var flktyProgressBarOurService = new Flickity(progressBarOurService, {
      prevNextButtons: false,
    });

    flktyProgressBarOurService.on("scroll", function (progress) {
      progress = Math.max(0, Math.min(1, progress));
      progressBarOurService.style.width = progress * 100 + "%";
    });
  }
}
handleProcessBarOurService();

// Placename handle
function handlePlaceName() {
  Fancybox.bind('[data-fancybox="galleryPlacename"]', {});
}
window.addEventListener("load", handlePlaceName());

// handle ourblog (tags)
let tabs = document.querySelectorAll(".libs__tabs .libs__tabs-item"),
  newLists = document.querySelectorAll(".libs__list");

function handleTags() {
  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      // Remove All => .active
      tabs.forEach((tab) => {
        tab.classList.remove("active");
      });
      // Add Class => .active khi click
      tab.classList.add("active");
      // Hide All News List giống như Remove All => .active
      newLists.forEach((list) => {
        list.classList.remove("active");
      });
      // Get data
      // Cach 1
      let dataID = tab.getAttribute("data-libs");
      // Cach 2
      let dataID2 = tab.dataset.libs;

      // Active List number
      let listNumberActive = document.querySelector(`.libs__list-${dataID}`);
      listNumberActive.classList.add("active");
    });
  });
}
handleTags();

// gallery sidebar
let gallerySidebar = document.querySelector(
  ".sidebar .sidebar__gallery .sidebar__gallery-list"
);
function handleGallerySidebar() {
  Fancybox.bind('[data-fancybox="sidebar-gallery"]', {
    // Your custom options
    Infinity: true,
    on: {
      keyboard: {
        Escape: "Đóng",
        Delete: "Đóng",
        Backspace: "Đóng",
        PageUp: "Kế tiếp (Next)",
        PageDown: "Lùi lại (Back)",
        ArrowUp: "Kế tiếp (Next)",
        ArrowDown: "Lùi lại (Back)",
        ArrowRight: "Kế tiếp (Next)",
        ArrowLeft: "Lùi lại (Back)",
      },
    },
  });
}
window.addEventListener("load", handleGallerySidebar());

// animated couter
function counter() {
  const counters = document.querySelectorAll(".textbox__number .value");
  const mainHome = document.querySelector(".main__home");
  const mainService = document.querySelector(".main__service");
  const speed = 200;
  if (document.contains(mainHome)) {
    counters.forEach((counter) => {
      const animate = () => {
        let value = +counter.getAttribute("data-count");
        let data = +counter.innerText;
        let time = value / speed;
        if (data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 10);
        } else {
          counter.innerText = `${value}+`;
        }
      };
      window.addEventListener("scroll", function () {
        const sectionMakereserve = document.querySelector(
          ".main__home .makereserve"
        );
        const hegihtSectionMakereserve = sectionMakereserve.offsetTop - 200;
        const heightWindowCouter = window.scrollY;
        if (heightWindowCouter >= hegihtSectionMakereserve) {
          animate();
        }
      });
    });
  }
  if (document.contains(mainService)) {
    counters.forEach((counter) => {
      const animate = () => {
        let value = +counter.getAttribute("data-count");
        let data = +counter.innerText;
        let time = value / speed;
        if (data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 10);
        } else {
          counter.innerText = `${value}+`;
        }
      };
      window.addEventListener("scroll", function () {
        const sectionService = document.querySelector(".main__service .data");
        const hegihtSectionService = sectionService.offsetTop - 700;
        const heightWindowCouter = window.scrollY;
        if (heightWindowCouter >= hegihtSectionService) {
          animate();
        }
      });
    });
  }
}
counter();

// handle mainHOme slider
//Event
function mainHomeEventSlider() {
  let mainHomeEvent = document.querySelector(".main__home .event");
  if (document.contains(mainHomeEvent)) {
    var mainHomeEventList = document.querySelector(
      ".event .container .flexauto .flexauto__wrap"
    );
    var flktMainHomeEvent = new Flickity(mainHomeEventList, {
      // options
      cellAlign: "left",
      contain: true,
      resize: true,
      wrapAround: true,
      draggable: ">1",
      prevNextButtons: false,
      lazyLoad: 3,
      prevNextButtons: false,
      pageDots: false,
      pauseAutoPlayOnHover: true,
      freeScroll: false,
    });
  }
}
mainHomeEventSlider();
//ourblog

function mainhomeOurblogSlider() {
  let mainhomeOurblog = document.querySelector(".main__home .ourblog");
  if (document.contains(mainhomeOurblog)) {
    var mainhomeOurblogList = document.querySelector(
      ".ourblog .container .flexauto .flexauto__wrap"
    );
    var flktmainhomeOurblog = new Flickity(mainhomeOurblogList, {
      // options
      cellAlign: "left",
      contain: true,
      wrapAround: true,
      draggable: ">1",
      prevNextButtons: false,
      lazyLoad: 4,
      prevNextButtons: false,
      pageDots: false,
      pauseAutoPlayOnHover: true,
      freeScroll: false,
    });
  }
}
mainhomeOurblogSlider();
// placename
function mainhomePlacenameSlider() {
  let mainhomePlacename = document.querySelector(".main__home .placename");
  if (document.contains(mainhomePlacename)) {
    var mainhomePlacenameList = document.querySelector(
      ".placename .container .placename__list"
    );
    var flktmainhomePlacename = new Flickity(mainhomePlacenameList, {
      // options
      cellAlign: "left",
      contain: true,
      wrapAround: true,
      draggable: ">1",
      prevNextButtons: false,
      lazyLoad: 4,
      prevNextButtons: false,
      pageDots: false,
      pauseAutoPlayOnHover: true,
      freeScroll: false,
    });
  }
}
mainhomePlacenameSlider();

//handle event-page-one slider
// Post
function mainEventPageOnePostSlider() {
  let mainEventPageOnePost = document.querySelector(
    ".main__event-one .reading .reading__main .reading__main-post"
  );
  if (document.contains(mainEventPageOnePost)) {
    var mainEventPageOnePostList = document.querySelector(
      ".main__event-one .reading .reading__main .reading__main-post  .flexauto .flexauto__wrap"
    );
    var flktmainEventPageOnePost = new Flickity(mainEventPageOnePostList, {
      // options
      cellAlign: "left",
      contain: true,
      wrapAround: true,
      draggable: ">1",
      prevNextButtons: false,
      lazyLoad: 4,
      prevNextButtons: false,
      pageDots: false,
      pauseAutoPlayOnHover: true,
      freeScroll: false,
    });
  }
}
mainEventPageOnePostSlider();

// handle placename-page-one post slider

function mainPlacenamePageOnePostSlider() {
  let mainPlacenamePageOnePost = document.querySelector(
    ".main__placename-one .reading .reading__main .reading__main-post"
  );
  if (document.contains(mainPlacenamePageOnePost)) {
    var mainPlacenamePageOnePostList = document.querySelector(
      ".main__placename-one .reading .reading__main .reading__main-post .flexauto .flexauto__wrap"
    );
    var flktmainPlacenamePageOnePost = new Flickity(
      mainPlacenamePageOnePostList,
      {
        // options
        cellAlign: "left",
        contain: true,
        wrapAround: true,
        draggable: ">1",
        prevNextButtons: false,
        lazyLoad: 4,
        prevNextButtons: false,
        pageDots: false,
        pauseAutoPlayOnHover: true,
        freeScroll: false,
      }
    );
  }
}
mainPlacenamePageOnePostSlider();

//sidebar slider
function sidebarResentPost() {
  let sidebarResentPost = document.querySelector(
    ".sidebar .sidebar__resentpost"
  );
  if (document.contains(sidebarResentPost)) {
    window.addEventListener("resize", function (event) {
      event.stopPropagation();
      let widthWindow = window.innerWidth;
      if (widthWindow < 768) {
        var sidebarResentPostList = document.querySelector(
          ".sidebar .sidebar__resentpost  .seenmore"
        );
        var flktsidebarResentPost = new Flickity(sidebarResentPostList, {
          // options
          cellAlign: "left",
          contain: true,
          wrapAround: true,
          draggable: ">1",
          prevNextButtons: false,
          lazyLoad: 4,
          prevNextButtons: false,
          pageDots: false,
          pauseAutoPlayOnHover: true,
          freeScroll: false,
        });
      }
    });
  }
}
sidebarResentPost();

// scroll hidden nav
function scrollHiddenNav() {
  var lastScrollTop;
  navbar = document.querySelector(".header");
  window.addEventListener("scroll", function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop >= lastScrollTop || scrollTop < 100) {
      navbar.style.visibility = "visible";
      navbar.style.opacity = "1";
    } else {
      navbar.style.visibility = "hidden";
      navbar.style.opacity = "0";
    }
    lastScrollTop = scrollTop;
  });
}
scrollHiddenNav();
