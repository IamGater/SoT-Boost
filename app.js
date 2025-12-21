const burger = document.querySelector(".burger");
const list = document.querySelector(".header__list");
const body = document.body;

burger.addEventListener("click", () => {
  const isActive = burger.classList.toggle("active");
  list.classList.toggle("active");
  body.classList.toggle("no-scroll", isActive);
});

const headerLinks = document.querySelectorAll(".header__list-link");

headerLinks.forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    list.classList.remove("active");
    body.classList.remove("no-scroll");
  });
});
