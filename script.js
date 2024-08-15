const inputs = document.querySelectorAll("input");
const form = document.getElementById("create-acct");

inputs.forEach(input => {
  input.addEventListener("invalid", event => {
    event.target.classList.add("error");
  }, false);

  input.addEventListener("input", event => {
    event.target.classList.remove("error");
  }, false);
});