// // Handle Header
const subMenu = document.querySelector(".submenu")
const subMenuNav =document.querySelector(".submenunav")
const subMenuNavList =document.querySelector(".menunavlist ")
const widthWindow = window.innerWidth;
function submenu(){
  subMenu.addEventListener('click',function(){
    subMenu.classList.toggle('active');
  })
}
function submenunav(){
  subMenuNav.addEventListener('click',function(event){
    event.stopPropagation();
    subMenuNav.classList.toggle('active');
  })

}
submenu();
submenunav();
// Handle Hamberger -> OK
const nav = document.querySelector(" .nav ");
const hamberger = document.querySelector(".header .btn__hamberger");
const navActive = document.querySelector(".nav .active");
function hideNav() {
  hamberger.classList.remove("active");
  nav.classList.remove("active");
}
function handleHamberger() {
  hamberger.addEventListener("click", function (event) {
    event.stopPropagation();
    hamberger.classList.toggle("active");
    hamberger.classList.toggle("not-active");
    nav.classList.toggle("active");
  }
  );
  // Hide Nav khi W = 992px
  // Resize Window
  window.addEventListener("resize", function (event) {
    event.stopPropagation();
    let widthWindow = window.innerWidth;
    if (widthWindow >= 1200) {
      // nav.classList.remove("active");
      // hamberger.classList.remove("active");
      hideNav()
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
function loadGoogleMap() {
  let iframeGoogleMap = document.querySelector(".map iframe");
  if (document.contains(iframeGoogleMap) == true) {
    let dataIDMap = iframeGoogleMap.getAttribute("data-src");
    iframeGoogleMap.setAttribute("src", dataIDMap);
  }
}
function map() {
  if (document.contains(contactMap) === true) {
    let dataIDMap = iframeMap.getAttribute("data-map-src");
    iframeMap.setAttribute(
              "src",
              `https://www.google.com/maps/embed?pb=${dataIDMap}`
            );
    // let widthWindow = window.innerWidth;
    // window.addEventListener("resize", function (event) {
    //   window.addEventListener("scroll", function () {
    //     let heightHeaderMap = document.querySelector(".header").offsetHeight;
    //     let scrollYWindowMap = window.pageYOffset;
    //     let heightMap =
    //       contactMap.offsetTop - heightHeaderMap - contactMap.offsetHeight;
    //     if (scrollYWindowMap >= heightMap) {
    //       iframeMap.setAttribute(
    //         "src",
    //         `https://www.google.com/maps/embed?pb=${dataIDMap}`
    //       );
    //     }
    //     console.log(scrollYWindowMap);
    //     console.log(heightMap);
    //   });
    // });
    // if (widthWindow <= 1024) {
    //   window.addEventListener("scroll", function () {
    //     let heightHeaderMap = document.querySelector(".header").offsetHeight;
    //     let scrollYWindowMap = window.pageYOffset;
    //     let heightMap =
    //       contactMap.offsetTop -
    //       heightHeaderMap -
    //       contactMap.offsetHeight * 1.8;
    //     if (scrollYWindowMap >= heightMap) {
    //       iframeMap.setAttribute(
    //         "src",
    //         `https://www.google.com/maps/embed?pb=${dataIDMap}`
    //       );
    //     }
    //     console.log(scrollYWindowMap);
    //     console.log(heightMap);
    //   });
    // }
    // if (widthWindow <= 768) {
    //   window.addEventListener("scroll", function () {
    //     let heightHeaderMap = document.querySelector(".header").offsetHeight;
    //     let scrollYWindowMap = window.pageYOffset;
    //     let heightMap =
    //       contactMap.offsetTop - heightHeaderMap - contactMap.offsetHeight * 2;
    //     if (scrollYWindowMap >= heightMap) {
    //       iframeMap.setAttribute(
    //         "src",
    //         `https://www.google.com/maps/embed?pb=${dataIDMap}`
    //       );
    //     }
    //     console.log(scrollYWindowMap);
    //     console.log(heightMap);
    //   });
    // }
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
  if (document.contains(video) === true) {
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
  if (document.contains(hero)=== true ) {
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
      fade: false,
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
  if (document.contains(review) === true ) {
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
      fade: false,
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
  if (document.contains(brand) === true ) {
    let widthWindow = window.innerWidth;
      var brandSlider = document.querySelector(".brand .brand__list");
      var flktBrandSlider = new Flickity(brandSlider, {
        // options
        cellAlign: "left",
        contain: true,
        wrapAround: true,
        draggable: ">1",
        prevNextButtons: false,
        // lazyLoad: 4,
        prevNextButtons: false,
        pageDots: false,
        pauseAutoPlayOnHover: true,
        freeScroll: true,
      });
    window.addEventListener("resize",function(){
      if(widthWindow < 576){
        var brandSlider = document.querySelector(".brand .brand__list");
        var flktBrandSlider = new Flickity(brandSlider, {
          // options
          cellAlign: "left",
          contain: true,
          wrapAround: true,
          draggable: ">1",
          prevNextButtons: false,
          prevNextButtons: false,
          pageDots: false,
          pauseAutoPlayOnHover: true,
          freeScroll: false,
        });
      }
    })
  }
}
 handleBrand();
// backtotop
const backToTop = document.querySelector(".backtotop");
// const sectionShow = document.querySelector(".main__home .hero")
function handleBackToTop() {
  window.addEventListener("scroll", function () {
    if (window.pageYOffset >= 600) {
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
   let widthWindow = window.innerWidth;
  let sectionOurService = document.querySelector(".main__service .ourservice");
  if (document.contains(sectionOurService) === true) {
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
      freeScroll: true,
    });
    window.addEventListener("resize", function(){
      if(widthWindow <= 768){
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
      });
      } else{
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
        freeScroll: true,
      });
      }
    })
  }
}
handleOurService();
function handleProcessBarOurService() {
  const sectionOurService = document.querySelector(
    ".main__aboutus .ourservice"
  );
  if (document.contains(sectionOurService) === true) {
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

// destination handle
function handleDestination() {
  Fancybox.bind('[data-fancybox="galleryDestination"]', {});
}
window.addEventListener("load", handleDestination()); 

// libs handle
function handleLibs(){
  Fancybox.bind('[data-fancybox="libs__list-1"]', {});
  Fancybox.bind('[data-fancybox="libs__list-2"]', {});
  Fancybox.bind('[data-fancybox="libs__list-3"]', {});
  Fancybox.bind('[data-fancybox="libs__list-4"]', {});
  Fancybox.bind('[data-fancybox="libs__list-5"]', {});
}
window.addEventListener("load", handleLibs()); 

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
  const header = document.querySelector(".header");
  const heightHeader = header.offsetHeight;
  const speed = 200;
  if (document.contains(mainHome)=== true) {
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
        const hegihtSectionMakereserve = sectionMakereserve.offsetTop - heightHeader ;
        const heightWindowCouter = window.scrollY;
        if (heightWindowCouter >= hegihtSectionMakereserve) {
          animate();
        }
      });
    });
  }
  if (document.contains(mainService) === true) {
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
        const hegihtSectionService = sectionService.offsetTop - 300;
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
  let widthWindow = window.innerWidth;
  
  if (document.contains(mainHomeEvent) === true) {
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
      prevNextButtons: false,
      pageDots: false,
      freeScroll: false,
     
    });
    window.addEventListener('resize',function(){
    let widthWindow = window.innerWidth;
      if(widthWindow < 576){
        var mainHomeEventList = document.querySelector(
          ".event .container .flexauto .flexauto__wrap"
        );
        var flktMainHomeEvent = new Flickity(mainHomeEventList, {
          // options
          cellAlign: "center",
        });
      } else{
        var mainHomeEventList = document.querySelector(
          ".event .container .flexauto .flexauto__wrap"
        );
        var flktMainHomeEvent = new Flickity(mainHomeEventList, {
          // options
          cellAlign: "left",
        });
      }
    })
  }
}
mainHomeEventSlider();
//ourblog

function mainhomeOurblogSlider() {
  let mainhomeOurblog = document.querySelector(".main__home .ourblog");
  if (document.contains(mainhomeOurblog)=== true) {
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
      freeScroll: false,
    });
  window.addEventListener("resize",function(){
    let widthWindow = window.innerWidth;
    if(widthWindow < 576){
      var mainhomeOurblogList = document.querySelector(
        ".ourblog .container .flexauto .flexauto__wrap"
      );
      var flktmainhomeOurblog = new Flickity(mainhomeOurblogList, {
        // options
        cellAlign: "center",
       
      });
    } else{
      var flktmainhomeOurblog = new Flickity(mainhomeOurblogList, {
        // options
        cellAlign: "left",
      });

    }
  })    
  }
}
mainhomeOurblogSlider();
// placename
function mainhomePlacenameSlider() {
  let mainhomePlacename = document.querySelector(".main__home .placename");
  if (document.contains(mainhomePlacename) === true) {
   window.addEventListener("resize",function(){
    let widthWindow = window.innerWidth
    if(widthWindow < 992){
      var mainhomePlacenameList = document.querySelector(
        ".placename .container .placename__list"
      );
      var flktmainhomePlacename = new Flickity(mainhomePlacenameList, {
        // options
        cellAlign: "left",
        contain: true,
        draggable: ">1",
        wrapAround: true,

        prevNextButtons: false,
       prevNextButtons: false,
      pageDots: false,

      });
    } 
    if(widthWindow < 576){
      var mainhomePlacenameList = document.querySelector(
        ".placename .container .placename__list"
      );
      var flktmainhomePlacename = new Flickity(mainhomePlacenameList, {
        // options
        cellAlign: "center",
        contain: true,
        draggable: ">1",
        wrapAround: true,
        prevNextButtons: false,
       prevNextButtons: false,
      pageDots: false,
      });
    } 
    if(widthWindow > 992){
      var mainhomePlacenameList = document.querySelector(
        ".placename .container .placename__list"
      );
      var flktmainhomePlacename = new Flickity(mainhomePlacenameList, {
        // options
      });
      flktmainhomePlacename.destroy();
    }

   })
  }
}
mainhomePlacenameSlider();

// handle detail slider

function mainEventDetaiPost(){
  let mainEventDetaiPost = document.querySelector(".main__event-detail .reading .reading__main .reading__main-post");
  if (document.contains(mainEventDetaiPost)=== true ){
    window.addEventListener("resize",function(){
      let widthWindow = window.innerWidth;
      if(widthWindow < 576){
        var mainEventDetaiPostList = document.querySelector(
          ".main__event-detail .reading .reading__main .reading__main-post .flexauto .flexauto__wrap"  )
          var flktmainEventDetaiPost = new Flickity(
            mainEventDetaiPostList,
            {
              // options
              cellAlign: "left",
              contain: true,
              wrapAround: true,
              draggable: ">1",
              prevNextButtons: false,
              prevNextButtons: false,
              pageDots: false,
              freeScroll: false,
            }
          );
      } else{
        var mainEventDetaiPostList = document.querySelector(
          ".main__event-detail .reading .reading__main .reading__main-post .flexauto .flexauto__wrap"  );
          var flktmainEventDetaiPost = new Flickity(
            mainEventDetaiPostList,
            { }
            );
            flktmainEventDetaiPost.destroy();
      }
      
    })
  }
}
;mainEventDetaiPost();

function mainDestinationDetailSlider() {
  let mainDestinationDetail = document.querySelector(".main__destination-detail .reading ");
  if (document.contains(mainDestinationDetail) === true) {
   window.addEventListener("resize",function(){
    let widthWindow = window.innerWidth
    if(widthWindow < 576){
      var mainDestinationDetailList = document.querySelector(
        ".main__destination-detail .reading .reading__main .reading__main-post .flexauto .flexauto__wrap"
      );
      var flktmainDestinationDetail = new Flickity(mainDestinationDetailList, {
        // options
        cellAlign: "left",
        contain: true,
        draggable: ">1",
        wrapAround: true,
        pageDots: false,
        prevNextButtons: false,

      });
    } else{
      var mainDestinationDetailList = document.querySelector(
        ".main__destination-detail .reading .reading__main .reading__main-post .flexauto .flexauto__wrap"
      );
      var flktmainDestinationDetail = new Flickity(mainDestinationDetailList, {
        // options
        cellAlign: "left",
        contain: true,
        draggable: ">1",
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
      });
      flktmainDestinationDetail.destroy();
    }
   })
  }
}
mainDestinationDetailSlider();

function mainFreshProducts(){
  let mainFreshProducts = document.querySelector(".main__freshproduct .reading .reading__main .reading__main-post");
  if (document.contains(mainFreshProducts)=== true ) {
    window.addEventListener('resize',function(){
      let widthWindow = window.innerWidth
      if(widthWindow < 576 ){
          var mainFreshProductsList = document.querySelector(
      ".main__freshproduct .reading .reading__main .reading__main-post .flexauto .flexauto__wrap"    );
        var flktmainFreshProducts = new Flickity(
          mainFreshProductsList,
          {
            // options
            cellAlign: "left",
            contain: true,
            draggable: ">1",
            wrapAround: true,
            pageDots: false,
            prevNextButtons: false,
          }
        );
      } else{
        var mainFreshProductsList = document.querySelector(  ".main__freshproduct .reading .reading__main .reading__main-post .flexauto .flexauto__wrap"    );
            var flktmainFreshProducts = new Flickity(
              mainFreshProductsList,  { }
            );
            flktmainFreshProducts.destroy();
      }
    })
    
  }
    
  
}
mainFreshProducts();
// scroll hidden nav
function scrollHiddenNav() {
  var lastScrollTop;
  navbar = document.querySelector(".header");
  window.addEventListener("scroll", function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop >= lastScrollTop || scrollTop <= 100) {
      navbar.style.visibility = "visible";
      navbar.style.opacity = "1";
    } else {
      navbar.style.visibility = "hidden";
      navbar.style.opacity = "0";
    }
    lastScrollTop = scrollTop;
  });
}
// scrollHiddenNav();

function loading(){
let loading = document.querySelector('.loading')
setTimeout(() => {
    loading.classList.add('active');
  }, 200);
}
loading();