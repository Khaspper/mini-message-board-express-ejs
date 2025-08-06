const form = document.getElementById("myForm");
console.log("form is →", form);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("hi");
});
