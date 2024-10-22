
  document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navList = document.getElementById("navList");

    hamburger.addEventListener("click", function () {
      navList.classList.toggle("nav-active");
    });
  });

