const links = document.querySelectorAll(".nav .nav-link");
const input = document.querySelector("input");
const scrollToTop = document.querySelector(".scrollToTop");

function toggleMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
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

function onScrollToTop() {
  window.scroll({ top: 0, left: 0, behavior: "smooth" });
}
document.querySelector("body").onscroll = function () {
  if (window.scrollY > 86)
    //if scroll is 150px from top
    scrollToTop.style.display = "flex";
  //if they scroll down, show
  else scrollToTop.style.display = "none"; //if they scroll up, hide
};

for (const link of links) {
  link.addEventListener("click", smoothScroll);
}
input.addEventListener("change", toggleMode);
scrollToTop.addEventListener("click", onScrollToTop);
