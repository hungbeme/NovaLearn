"use script";

import { detailsValue } from "./signup.js";
const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password");
const formSectionEl = document.querySelector(".form-section");

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
      alert("Login sucessfully✅");
      window.location.href = "./Dahboard.html";
    } else {
      alert("User not found!!!❌");
    }
  } catch (err) {
    console.error(err);
    alert("Error problem connecting to server❌");
  }
};

// WHEN FORM IS SUBMITTED
formSectionEl.addEventListener("submit", function (e) {
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
    if (find) {
      emailEl.value = "";
      passwordEl.value = "";
      alert("Login sucessfully✅");

      window.location.href = "./Dashboard.html";
    } else {
      runApi(emailValue, passwordValue);
    }
  }
  theFunction();
});
