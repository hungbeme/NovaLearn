"use script";

////////////////////////////////////////////////////
////////// MAKING THE NAVIGATION WORK ////////////
////////////////////////////////////////////////////
const clostbtn = document.querySelector(".close-icon");
const openbtn = document.querySelector(".menu-icon");
const headerEl = document.querySelector(".header");

clostbtn.addEventListener("click", function () {
  headerEl.classList.remove("hide-nav");
});

openbtn.addEventListener("click", function () {
  headerEl.classList.add("hide-nav");
});

////////////////////////////////////////////////////
////////// SMOOTH SCROLLING ////////////
////////////////////////////////////////////////////
const allLinkEls = document.querySelectorAll("a:link");

allLinkEls.forEach(function (links) {
  links.addEventListener("click", function () {
    const linkAttribute = links.getAttribute("href");
    headerEl.classList.remove("hide-nav");

    if (linkAttribute === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    if (linkAttribute !== "#" && linkAttribute.startsWith("#")) {
      const sectionEl = document.querySelector(linkAttribute);
      sectionEl.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

////////////////////////////////////////////////////
////////// STICKY NAVIGATION ////////////
////////////////////////////////////////////////////
const heroSectionEl = document.querySelector(".hero-section");

const observerEl = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-70px",
  }
);

observerEl.observe(heroSectionEl);
