const form = document.getElementById("confirmation-form");
const submitedForm = document.getElementById("submited-form");

let formHeight;

document.addEventListener("DOMContentLoaded", () => {
  formHeight = form.scrollHeight;
});

window.addEventListener("resize", () => {
  formHeight = form.scrollHeight;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!onValidation()) return;

  form.classList.add("hidden");
  submitedForm.classList.remove("hidden");
  submitedForm.style.height = `${formHeight}px`;
});

function onValidation() {
  let errorsFiled = [];

  const name = document.getElementById("name");
  const phoneNumber = document.getElementById("phone-number");
  const city = document.getElementById("city");
  const fo = document.getElementById("fo");
  const isConfirmPolicy = document.getElementById("is-confirm-policy");

  name.classList.remove("input-err");
  phoneNumber.classList.remove("input-err");
  city.classList.remove("input-err");
  fo.classList.remove("input-err");
  isConfirmPolicy.classList.remove("input-err");

  if (name.value === "") errorsFiled.push(name);
  if (phoneNumber.value === "") errorsFiled.push(phoneNumber);
  else if (phoneNumber.value.length < 18) errorsFiled.push(phoneNumber);
  if (city.value === "") errorsFiled.push(city);
  if (fo.value === "") errorsFiled.push(fo);
  if (!isConfirmPolicy.checked) errorsFiled.push(isConfirmPolicy);

  if (errorsFiled.length) {
    return errorsFiled.forEach((filed) => {
      filed.classList.add("input-err");
    });
  }

  return true;
}
