"use script";

console.log("WORKING");

const btnOpen = document.querySelector(".menu-icon");
const btnClose = document.querySelector(".close-icon");
// const headerEl = document.querySelector(".header");
const mainEl = document.querySelector(".main");
const liOptions = document.querySelectorAll(".options");
const dashboardEl = document.querySelector(".dashboard");
const yourCourseEl = document.querySelector(".your-courses-page");
const assignmentEl = document.querySelector(".assignment-page");
const profileEl = document.querySelector(".profile-page");

///////////////////////////////////
/////////// FUNCTIONS /////////////
///////////////////////////////////
const selectSections = function (className, numVal, sectionName) {
  console.log(className, numVal, sectionName);
  //   TO CHANGE THE ACTIVE FOR THE MENU OPTIONS
  liOptions.forEach((val) => val.classList.remove("active-option"));
  className.classList.add("active-option");

  //   TO CHANGE EACH SECTIONS ACCORDING TO WHICH MENU IS TAPPED
  dashboardEl.classList.add("hide-page"),
    yourCourseEl.classList.add("hide-page"),
    assignmentEl.classList.add("hide-page"),
    profileEl.classList.add("hide-page");

  sectionName.classList.remove("hide-page");
  document.body.classList.remove("hide");
};

///////////////////////////////////
//////// EVENT LISTENERS ////////
///////////////////////////////////
btnOpen.addEventListener("click", function () {
  document.body.classList.add("hide");
});

btnClose.addEventListener("click", function () {
  document.body.classList.remove("hide");
});

liOptions.forEach((val, i) => {
  val.addEventListener("click", function () {
    if (i === 0) {
      selectSections(val, i, dashboardEl);
    } else if (i === 1) {
      selectSections(val, i, yourCourseEl);
    } else if (i === 2) {
      selectSections(val, i, assignmentEl);
    } else if (i === 3) {
      selectSections(val, i, profileEl);
    }
  });
});

// const getAPIFunction = async function () {
//   try {
//     const response = await fetch("https://fakestoreapi.com/products");
//     console.log("response1:", response);
//     const data = await response.json();
//     console.log("data1:", data);
//   } catch {}
// };

// const getAPIFunction2 = async function () {
//   try {
//     const response = await fetch("https://dummyjson.com/products/categories");
//     console.log("response2:", response);
//     const data = await response.json();
//     console.log("data2:", data);
//   } catch {}
// };

// const getAPIFunction3 = async function () {
//   try {
//     const response = await fetch(
//       "https://openlibrary.org/people/mekBot/books/currently-reading.json"
//     );
//     console.log("response3:", response);
//     const data = await response.json();
//     console.log("data3:", data);
//   } catch {}
// };

// getAPIFunction();
// getAPIFunction2();
// getAPIFunction3();
