function toggleMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

document.querySelector("body").addEventListener("click", toggleMode);
