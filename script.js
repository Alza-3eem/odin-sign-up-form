const inputs = document.querySelectorAll("input");
const password = document.getElementById("password")
const confirmPw = document.getElementById("confirm")
const form = document.getElementById("create-acct")

inputs.forEach(input => {
  input.addEventListener(
    "invalid",
    event => {
      input.classList.add("error");
    },
    false
  );
});

document.addEventListener("input", (e) => {
	if (e.target == password) {
		password.classList.add("pw-check")

	}

	if (e.target == password || e.target == confirmPw) {
		if (confirmPw.value != password.value) {
			confirmPw.classList.add("pw-confirm-check")	
		} else {
			confirmPw.classList.remove("pw-confirm-check")
		}
	}
})
