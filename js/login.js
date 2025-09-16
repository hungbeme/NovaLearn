"use script";

import { detailsValue } from "./signup.js";
const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password");
const formSectionEls = document.querySelector(".form-section");
const messageEl = document.querySelector(".message");

const API_URL = "https://reqres.in/api/";

// RUNNING THE API
const runApi = async function (emailValue, passwordValue) {
  try {
    const res = await fetch(`https://reqres.in/api/login`, {
      method: "POST",
      headers: {
        "x-api-key": "reqres-free-v1",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailValue,
        password: passwordValue,
      }),
    });

    const data = await res.json();
    // LOAD DASHBOARD WINDOW
    if (res.ok) {
      emailEl.value = "";
      passwordEl.value = "";
      messageFunction("Login sucessfully✅", "success");
    } else {
      messageFunction("User not found!!!❌", "error");
    }
  } catch (err) {
    messageFunction("Error problem connecting to server❌", "error");
  }
};

// WHEN FORM IS SUBMITTED
formSectionEls.addEventListener("submit", function (e) {
  e.preventDefault();
  const emailValue = emailEl.value.trim();
  const passwordValue = passwordEl.value.trim();

  // CHECK IF USER DETAILS IS CORRECT.
  const find = detailsValue.find((_, i) => {
    return (
      detailsValue[i].email === emailValue &&
      detailsValue[i].password === passwordValue
    );
  });

  function theFunction() {
    if (!find || typeof find === undefined) {
      runApi(emailValue, passwordValue);
    } else {
      emailEl.value = "";
      passwordEl.value = "";
      messageFunction("Login sucessfully✅", "success");
    }
  }
  theFunction();
});

//  MESSAGE FUNCTION
const messageFunction = function (message, type) {
  console.log(messageEl);
  messageEl.style.display = "block";
  messageEl.textContent = message;

  if (type === "error") {
    messageEl.style.color = "red";
  } else if (type === "success") {
    setTimeout(() => (window.location.href = "./Dashboard.html"), 1200);

    messageEl.style.color = "green";
  }

  setTimeout(() => (messageEl.style.display = "none"), 1000);
};
