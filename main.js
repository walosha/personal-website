function toggleMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

const links = document.querySelectorAll(".nav .nav-link");

for (const link of links) {
  link.addEventListener("click", smoothScroll);
}

function smoothScroll(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  if (href && href.startsWith("#")) {
    const offsetTop = document.querySelector(href).offsetTop;
    scroll({
      top: offsetTop,
      behavior: "smooth",
    });
    return;
  }
}

//Handler for Night mode
document.querySelector("input").addEventListener("change", toggleMode);
