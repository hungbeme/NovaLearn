"use script";

const userNameEl = document.getElementById("User-name");
const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password");
const confirmPasswordEl = document.getElementById("confirm-password");
const formSectionEl = document.querySelector(".form-section");
const messageEl = document.querySelector(".message");

const API_URL = "https://reqres.in/api/";

const detailsArrValues = [];

const signUp = async function (username, email, password) {
  try {
    const res = await fetch(`${API_URL}users`, {
      method: "POST",
      headers: {
        "x-api-key": "reqres-free-v1",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    detailsArrValues.push({
      username: username,
      email: email,
      password: password,
    });
    localStorage.setItem("UserDetails", JSON.stringify(detailsArrValues));
    messageFunction("User Created successfully✅", "success");
  } catch (err) {
    messageFunction("Problem accessing server", "error");
  }
};

formSectionEl.addEventListener("submit", function (e) {
  e.preventDefault();
  const emailValue = emailEl.value.trim();
  const passwordValue = passwordEl.value.trim();
  const confirmPasswordValue = confirmPasswordEl.value.trim();
  const userNameVakue = userNameEl.value.trim();

  if (passwordValue.length < 6) {
    messageFunction("Password must be longer than 6 digits", "error");
  } else if (confirmPasswordValue !== passwordValue) {
    messageFunction("Password does not match", "error");
  } else {
    signUp(userNameVakue, emailValue, passwordValue);
  }
});

const detailsValue = JSON.parse(localStorage.getItem("UserDetails"));
export { detailsValue };

//  MESSAGE FUNCTION
const messageFunction = function (message, type) {
  console.log(messageEl);
  messageEl.style.display = "block";
  messageEl.textContent = message;

  if (type === "error") {
    messageEl.style.color = "red";
  } else if (type === "success") {
    messageEl.style.color = "green";
    setTimeout(() => (window.location.href = "./login.html"), 1200);
  }

  setTimeout(() => (messageEl.style.display = "none"), 1000);
};
