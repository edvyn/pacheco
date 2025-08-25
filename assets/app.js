// search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");

if (navbar && searchBox) {
  searchBox.addEventListener("click", () => {
    navbar.classList.toggle("showInput");
    if (navbar.classList.contains("showInput")) {
      searchBox.classList.replace("bx-search", "bx-x");
    } else {
      searchBox.classList.replace("bx-x", "bx-search");
    }
  });
}

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");

if (menuOpenBtn && menuCloseBtn) {
  menuOpenBtn.onclick = function() {
    if (navLinks) {
      navLinks.style.left = "0";
    }
  };
  menuCloseBtn.onclick = function() {
    if (navLinks) {
      navLinks.style.left = "-100%";
    }
  };
}

// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
if (htmlcssArrow) {
  htmlcssArrow.onclick = function() {
    if (navLinks) {
      navLinks.classList.toggle("show1");
    }
  };
}

let moreArrow = document.querySelector(".more-arrow");
if (moreArrow) {
  moreArrow.onclick = function() {
    if (navLinks) {
      navLinks.classList.toggle("show2");
    }
  };
}

let jsArrow = document.querySelector(".js-arrow");
if (jsArrow) {
  jsArrow.onclick = function() {
    if (navLinks) {
      navLinks.classList.toggle("show3");
    }
  };
}

// IntersectionObserver for hidden-content
const hiddenElements = document.querySelectorAll('.hidden-content');

if (hiddenElements.length > 0) {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(handleIntersection, observerOptions);

  hiddenElements.forEach(element => observer.observe(element));
}


document.addEventListener("DOMContentLoaded", function () {
  const heroSection = document.querySelector(".hero-section");
  const imageUrls = [
      "assets/media/Frame9.png",
      "assets/media/Frame10.png",
      "assets/media/Frame12.png",
      "assets/media/Frame13.png",
      "assets/media/Frame14.png",
  ];

  // Função para pré-carregar as imagens
  function preloadImages(urls) {
      return urls.map(url => {
          const img = new Image();
          img.src = url;
          return img;
      });
  }

  const preloadedImages = preloadImages(imageUrls);
  let index = 0;

  function changeBackground() {
      heroSection.style.backgroundImage = `url('${preloadedImages[index].src}')`;
      index = (index + 1) % preloadedImages.length;
  }

  changeBackground();
  setInterval(changeBackground, 5000);
});
