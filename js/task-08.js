const formEl = document.querySelector(".login-form");
const emailEl = document.querySelector("[name='email']");
const passEl = document.querySelector("[name='password']");

function onFormSubmit(e) {
  e.preventDefault();

  // let result = {};
  // const formData = new FormData(e.currentTarget);
  // formData.forEach((a, b) => (result[b] = a));

  const email = e.currentTarget.elements.email.value;
  const password = e.currentTarget.elements.password.value;

  if (email.length === 0 || password.length === 0) {
    alert("fill in both fields");
    return;
  }

  // console.log(result);
  console.log({ email, password });
  formEl.reset();
}

formEl.addEventListener("submit", onFormSubmit);
