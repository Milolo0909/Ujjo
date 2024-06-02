document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".header__burger");
  const headerList = document.querySelector(".header__list");
  const body = document.body;

  burger.addEventListener("click", function (event) {
    burger.classList.toggle("active");
    headerList.classList.toggle("active");
    body.classList.toggle("lock");
  });

  const header = document.querySelector(".header__burger");
  let scrollPrev = 0;

  window.addEventListener("scroll", function () {
    const scrolled = window.scrollY;

    if (scrolled > 0 && scrolled > scrollPrev) {
      header.classList.add("out");
    } else {
      header.classList.remove("out");
    }
    scrollPrev = scrolled;
  });
});
