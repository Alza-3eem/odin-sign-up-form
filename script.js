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

form.addEventListener("submit", function(event) {
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm");
    const phone = document.getElementById("phone");
    const email = document.getElementById("email");
    const confirmError = document.getElementById("confirm-error");
    const phoneError = document.getElementById("phone-error");
    const emailError = document.getElementById("email-error");

    let isValid = true;

    confirmError.textContent = '';
    confirmError.style.display = 'none';

    phoneError.textContent = '';
    phoneError.style.display = 'none';

    emailError.textContent = '';
    emailError.style.display = 'none';

    password.classList.remove("error");
    confirmPassword.classList.remove("error");
    phone.classList.remove("error");
    email.classList.remove("error");

    if (password.value !== confirmPassword.value) {
        isValid = false;
        confirmError.textContent = "Password must match";
        confirmError.style.display = 'block';
        confirmPassword.classList.add("error");
    }

    const phonePattern = /^\d{10}$|^\d{3}[- ]\d{3}[- ]\d{4}$/;
    if (!phonePattern.test(phone.value)) {
        isValid = false;
        phoneError.textContent = "Enter a valid phone number format (e.g., 1234567890 or 123-456-7890 or 123 456 7890)";
        phoneError.style.display = 'block';
        phone.classList.add("error");
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        isValid = false;
        emailError.textContent = "Enter a valid email";
        emailError.style.display = 'block';
        email.classList.add("error");
    }

    if (!isValid) {
        event.preventDefault();
    }
});
