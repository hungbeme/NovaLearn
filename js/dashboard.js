"use script";

console.log("WORKING");

const btnOpen = document.querySelector(".menu-icon");
const btnClose = document.querySelector(".close-icon");
const headerEl = document.querySelector(".header");
const mainContainerEl = document.querySelector(".main-container");

btnOpen.addEventListener("click", function () {
  headerEl.classList.toggle("hide");
  mainContainerEl.classList.toggle("hide");
});

btnClose.addEventListener("click", function () {
  headerEl.classList.toggle("hide");
  mainContainerEl.classList.toggle("hide");
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
