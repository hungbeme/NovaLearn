"use script";

const userNameEl = document.getElementById("User-name");
const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password");
const confirmPasswordEl = document.getElementById("confirm-password");
const formSectionEl = document.querySelector(".form-section");
const API_URL = "https://reqres.in/api/";

const detailsArrValues = [];

const signUp = async function (userName, email, password) {
  try {
    const res = await fetch(`https://reqres.in/api/users`, {
      method: "POST",
      headers: {
        "x-api-key": "reqres-free-v1",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: userName,
        email: email,
        password: password,
      }),
    });
    const data = await res.json();

    detailsArrValues.push({
      email: email,
      password: password,
    });
    localStorage.setItem("UserDetails", JSON.stringify(detailsArrValues));
    alert("User Created successfully✅");
    window.location.href = "./login.html";
  } catch (err) {
    alert(`${err} Problem accessing server`);
  }
};

formSectionEl.addEventListener("submit", function (e) {
  e.preventDefault();
  const emailValue = emailEl.value.trim();
  const passwordValue = passwordEl.value.trim();
  const userNameValue = userNameEl.value.trim();
  const confirmPasswordValue = confirmPasswordEl.value.trim();

  if (passwordValue.length < 6) {
    alert("Password must be longer than 6 digits");
  } else if (confirmPasswordValue !== passwordValue) {
    alert("password does not match");
  } else {
    signUp(userNameValue, emailValue, passwordValue);
  }
});

const detailsValue = JSON.parse(localStorage.getItem("UserDetails"));

export { detailsValue };
