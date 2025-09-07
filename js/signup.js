"use script";

const userNameEl = document.getElementById("User-name");
const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password");
const confirmPasswordEl = document.getElementById("confirm-password");
const formSectionEl = document.querySelector(".form-section");
const API_URL = "https://reqres.in/api/";

async function signUp(userName, email, password) {
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
  } catch {
    (err) => {
      alert(`${err} Problem accessing server`);
    };
  }
}

formSectionEl.addEventListener("submit", function (e) {
  e.preventDefault();
  const emailValue = emailEl.value.trim();
  const passwordValue = passwordEl.value.trim();
  const userNameValue = userNameEl.value.trim();
  const confirmPasswordValue = confirmPasswordEl.value.trim();
  console.log(emailValue, userNameValue, passwordValue);

  if (passwordValue.length < 6) {
    alert("Password must be longer than 6 digits");
  } else if (confirmPasswordValue !== passwordValue) {
    alert("password does not match");
  } else {
    console.log("password match");
    signUp(userNameValue, emailValue, passwordValue);
    alert("User Created successfully✅, Go to login page and login");
  }
});
