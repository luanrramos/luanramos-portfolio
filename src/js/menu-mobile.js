const burger = document.querySelector(".burger");
const sidebar = document.querySelector("#sidebar");
const links = document.querySelectorAll("#sidebar ul li a");
// Função responsiva - menu hamburager
burger.addEventListener("click", () => {
  sidebar.classList.toggle("is-active");
  burger.classList.toggle("is-active");
});

// Efeito hover ripple
var btn = document.querySelectorAll(".button-hover");
var btnArray = Array.from(btn);
btnArray.forEach((btn) => {
  btn.onmousemove = function (e) {
    var x = e.pageX - btn.offsetLeft;
    var y = e.pageY - btn.offsetTop;

    btn.style.setProperty("--eixoX", x + "px");
    btn.style.setProperty("--eixoY", y + "px");
  };
});

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",

  });

};

// FUNCIONALIDADE: Menu seguindo as sections
window.onload = function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar .nav-container li a");
  function updateActiveSection() {
    let maxVisibleArea = 0;
    let activeSection = null;
    sections.forEach((section) => {
      const visibleArea = getVisibleArea(section);
      if (visibleArea > maxVisibleArea) {
        maxVisibleArea = visibleArea;
        activeSection = section.getAttribute("id");
      }
    });
    navLinks.forEach((link) => {
      link.classList.remove("is-active");
      if (link.getAttribute("href") === `#${activeSection}`) {
        link.classList.add("is-active");
      }
    });
  }
  function getVisibleArea(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const windowWidth =
      window.innerWidth || document.documentElement.clientWidth;
    const visibleHeight =
      Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
    const visibleWidth =
      Math.min(rect.right, windowWidth) - Math.max(rect.left, 0);
    return visibleHeight * visibleWidth;
  }
  window.addEventListener("scroll", updateActiveSection);
  window.addEventListener("resize", updateActiveSection);
};

function myFunction(x) {
  if (containerSm) {
    if (x.matches) {
      // If media query matches
      containerSm.classList.remove("container");
    } else {
      containerSm.classList.add("container");
    }
  }
}

// Create a MediaQueryList object
var x = window.matchMedia("(max-width: 700px)");
var containerSm = document.querySelector(".container-sm");
// Call listener function at run time
myFunction(x);

// Attach listener function on state changes
x.addEventListener("change", function () {
  myFunction(x);
});
