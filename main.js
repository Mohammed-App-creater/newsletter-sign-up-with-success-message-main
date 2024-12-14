function validateEmail(email) {
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return pattern.test(email);
}

const emailInput = document.getElementById("Email");
const errorMessage = document.getElementById("enValidEmail");
const subscribeButton = document.getElementById("subscribeButton");
const thankYouMessage = document.getElementById("thankYouMessage");
const emailDisplay = document.getElementById("emailDisplay");
const dismissButton = document.getElementById("dismissButton");
const subscribeTab = document.getElementById("subscribeTab");

subscribeButton.addEventListener("click", function (event) {
  event.preventDefault();

  const email = emailInput.value.trim();

  if (validateEmail(email)) {
    errorMessage.style.display = "none";
    emailInput.classList.remove("error");

    emailDisplay.textContent = email;
    thankYouMessage.style.display = "flex";
    subscribeTab.style.display = "none";
  } else {
    errorMessage.style.display = "block";
    emailInput.classList.add("error");
  }
});

dismissButton.addEventListener("click", function () {
  thankYouMessage.style.display = "none";
  subscribeTab.style.display = "flex";
  emailInput.value = "";
});
