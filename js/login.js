"use script";

const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password");
const loginBtn = document.querySelector(".login-btn");
const formSectionEl = document.querySelector(".form-section");

const API_URL = "https://reqres.in/api/";

formSectionEl.addEventListener("submit", async function (e) {
  e.preventDefault();

  const emailValue = emailEl.value.trim();
  const passwordValue = passwordEl.value.trim();

  async function theFunction() {
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
      console.log(res);
      const data = await res.json();
      console.log(data);

      if (res.ok) {
        alert("Login sucessfully✅");
        localStorage.setItem("token", data);
        window.location.href = "./dashboard.html";
      } else {
        alert("User not found!!!❌");
      }
    } catch (err) {
      console.error(err);
      alert("Error problem connecting to server❌");
    }
  }

  theFunction();
});
