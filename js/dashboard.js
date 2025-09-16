"use script";

console.log("WORKING");

const btnOpen = document.querySelector(".menu-icon");
const btnClose = document.querySelector(".close-icon");
const profileDetails = document.querySelector(".profile-content");
const mainEl = document.querySelector(".main");
const liOptions = document.querySelectorAll(".options");
const dashboardEl = document.querySelector(".dashboard");
const yourCourseEl = document.querySelector(".your-courses-page");
const assignmentEl = document.querySelector(".assignment-page");
const profileEl = document.querySelector(".profile-page");
const link2courseEl = document.querySelector(".link2courses");
const techEl = document.querySelector(".tech");
const business = document.querySelector(".business");
const creativeSkillsEl = document.querySelector(".creative-skills");
const pDevelEl = document.querySelector(".personal-development");
const pWellnessEl = document.querySelector(".lifestyle-wellness");
const aSupportEl = document.querySelector(".academic-support");
const messageEl = document.querySelector(".message");

document.addEventListener(
  "DOMContentLoaded",
  messageFunction(
    "NOTE: This is a demo account! Some buttons do not work",
    "error"
  )
);
//  MESSAGE FUNCTION
const messageFunction = function (message, type) {
  console.log(messageEl);
  messageEl.style.display = "block";
  messageEl.textContent = message;

  if (type === "error") {
    messageEl.style.color = "red";
  } else if (type === "success") {
    messageEl.style.color = "green";
  }
  setTimeout(() => (messageEl.style.display = "none"), 1000);
};

///////////////////////////////////
/////////// FUNCTIONS /////////////
///////////////////////////////////
//

const selectSections = function (className, numVal, sectionName) {
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

// TO GET THE PROFILE INFORMATION
const getAPIFunction2 = async function () {
  try {
    const response = await fetch(`https://randomuser.me/api/`);
    const data = await response.json();
    profileDetails.innerHTML = "";
    const html = `
            <img
              src="${data.results[0].picture.large}"
              alt=""
              class="user-img"
            />
            <div>
              <p class="profile-text">Name:</p>
              <p class="user-name subtext">
              ${data.results[0].name.title}
              ${data.results[0].name.last}
              ${data.results[0].name.first}.</p>
            </div>

            <div>
              <p class="profile-text">User ID:</p>
              <p class="user-courses subtext">${data.results[0].id.value}</p>
            </div>

            <div>
              <p class="profile-text">Email:</p>
              <p class="user-email subtext">${data.results[0].email}.</p>
            </div>

            <div>
              <p class="profile-text">Phone Number:</p>
              <p class="user-courses subtext">${data.results[0].phone}.</p>
            </div>

            
    `;
    profileDetails.insertAdjacentHTML("afterbegin", html);
  } catch (err) {
    alert();
    messageFunction(`Failed to fetch user details ${err} `, "error");
  }
};
getAPIFunction2();

///////////////////////////////////
//////// EVENT LISTENERS ////////
///////////////////////////////////

btnOpen.addEventListener("click", function () {
  document.body.classList.add("hide");
});

btnClose.addEventListener("click", function () {
  document.body.classList.remove("hide");
});

// FOR NAVIGATION
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

  link2courseEl.addEventListener("click", function () {
    selectSections(liOptions[1], 1, yourCourseEl);
  });
});

// FOR VIEW MORE/LESS FOR COURSES
const allElements = [
  techEl,
  business,
  creativeSkillsEl,
  pDevelEl,
  pWellnessEl,
  aSupportEl,
];

allElements.forEach((val) => {
  val.addEventListener("click", function () {
    val.classList.toggle("hide-category");
  });
});
