var typed = new Typed("#element", {
    strings: [
      "Web Developer",
      "ML Enginner",
      "Software Developer",
      "Java Developer",
    ],
    typeSpeed: 50,
  });

  document.addEventListener("DOMContentLoaded", function () {
    const toggleBar = document.querySelector(".toggle-bar");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    toggleBar.addEventListener("click", function () {
      dropdownMenu.classList.toggle("show");
    });

    dropdownMenu.addEventListener("mouseleave", function () {
      dropdownMenu.classList.remove("show");
    });
  });