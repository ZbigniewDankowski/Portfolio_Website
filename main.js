const nav = document.querySelector(".navbar");
const nav_links = [...document.querySelectorAll(".menu_link")];
const menuBurger = document.querySelector(".burger_menu");
const menu = document.querySelector(".menu");

//scroll function for navbar
window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});

//toogle menu burger

menuBurger.addEventListener("click", () => {
  menuBurger.classList.toggle("active");
  menu.classList.toggle("active");
});

//set active class for links
nav_links.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.toggle("active");
    menuBurger.classList.toggle("active");
    nav_links.forEach((link) => {
      link.classList.remove("menu_link--active");
    });
    link.classList.add("menu_link--active");
  });
});

//carousel script

$(".carousel").owlCarousel({
  loop: true,
  margin: 20,
  autoplayTimeOut: 2000,
  autoplayHoverPause: true,
  dotsEach: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
//
// email sending function

emailjs.init("40uMwHAgg2ys-XP28");
window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      emailjs.sendForm("service_altyoyq", "contact_form_send", this).then(
        function () {
          console.log("SUCCESS!");
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    });
};
