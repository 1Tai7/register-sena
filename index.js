let name = "";
let lastName = "";
let ID = "";
let date = "";

const inputName = document.getElementById("name");
const inputLastName = document.getElementById("lastName");
const inputID = document.getElementById("ID");
const inputDate = document.getElementById("date");

const errorName = document.getElementById("errorName");
const errorLastName = document.getElementById("errorLastName");
const errorID = document.getElementById("errorID");
const errorDate = document.getElementById("errorDate");

let validName = /^[a-zA-Z]{3,}$/;
let validID = /^\d{8,10}$/;

errorName.style.color = "#FF5E5B";
errorLastName.style.color = "#FF5E5B";
errorID.style.color = "#FF5E5B";
errorDate.style.color = "#FF5E5B";

const form = document.getElementById("registerForm");

document.getElementById("name").addEventListener("input", (event) => {
  name = event.target.value;
  if (event.target.value) {
    inputName.style.backgroundColor = "";
    errorName.innerHTML = "";
  }
});
document.getElementById("lastName").addEventListener("input", (event) => {
  lastName = event.target.value;
  if (event.target.value) {
    inputLastName.style.backgroundColor = "";
    errorLastName.innerHTML = "";
  }
});
document.getElementById("ID").addEventListener("input", (event) => {
  ID = event.target.value;
  if (event.target.value) {
    inputID.style.backgroundColor = "";
    errorID.innerHTML = "";
  }
});
document.getElementById("date").addEventListener("input", (event) => {
  date = event.target.value;
  if (event.target.value) {
    inputDate.style.backgroundColor = "";
    errorDate.innerHTML = "";
  }
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!name || !validName.test(name)) {
    inputName.style.backgroundColor = "#FFE0DF";
    errorName.style.fontSize = "13px";
    errorName.innerHTML = "campo requerido";
  } else {
    inputName.style.backgroundColor = "";
    errorName.innerHTML = "";
  }

  if (!lastName || !validName.test(lastName)) {
    inputLastName.style.backgroundColor = "#FFE0DF";
    errorLastName.style.fontSize = "13px";
    errorLastName.innerHTML = "campo requerido";
  } else {
    inputLastName.style.backgroundColor = "";
    errorLastName.innerHTML = "";
  }
  if (!ID || !validID.test(ID)) {
    inputID.style.backgroundColor = "#FFE0DF";
    errorID.style.fontSize = "13px";
    errorID.innerHTML = "campo requerido";
  } else {
    inputID.style.backgroundColor = "";
    errorID.innerHTML = "";
  }

  if (!date || date.length == 0) {
    inputDate.style.backgroundColor = "#FFE0DF";
    errorDate.style.fontSize = "13px";
    errorDate.innerHTML = "campo requerido";
  } else {
    inputDate.style.backgroundColor = "";
    errorDate.innerHTML = "";
  }

  if (
    date.length == 0 &&
    !validID.test(ID) &&
    !validName.test(lastName) &&
    !validName.test(name)
  ) {
  } else {
    alert("Registro Completado!!");
    inputName.value = "";
    inputLastName.value = "";
    inputID.value = "";
    inputDate.value = "";

    inputName.style.backgroundColor = "";
    inputLastName.style.backgroundColor = "";
    inputID.style.backgroundColor = "";
    inputDate.style.backgroundColor = "";

    errorName.innerHTML = "";
    errorLastName.innerHTML = "";
    errorID.innerHTML = "";
    errorDate.innerHTML = "";
  }
});
