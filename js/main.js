const navbar = document.getElementById("navbar");
const hamburger = document.querySelector(".hamburger");

if (navbar && hamburger) {
  hamburger.addEventListener("click", function () {
    const isOpen = navbar.classList.toggle("menu-open");
    hamburger.setAttribute("aria-expanded", String(isOpen));
  });

  window.addEventListener("scroll", function () {
    navbar.classList.toggle("top", window.scrollY <= 100);
  });
}

document
  .querySelectorAll('#navbar a[href^="#"], .btn[href^="#"]')
  .forEach(function (link) {
    link.addEventListener("click", function (event) {
      const target = document.querySelector(link.hash);

      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
        navbar?.classList.remove("menu-open");
        hamburger?.setAttribute("aria-expanded", "false");
      }
    });
  });
