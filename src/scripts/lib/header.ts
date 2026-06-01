let lastScrollTop = 0;

window.addEventListener("scroll", function () {
  //   console.log(window.scrollY); // Текущее положение скролла

  let currentScrollTop =
    window.pageYOffset || document.documentElement.scrollTop;
  const header = document.querySelector("header");
  this.setTimeout(() => {
    if (window.scrollY > 0) {
      header?.classList.add("header--white");
    } else {
      header?.classList.remove("header--white");
    }

    if (currentScrollTop < lastScrollTop) {
      header?.classList.add("header--scroll");
      // } else {
    } else if (currentScrollTop > lastScrollTop) {
      header?.classList.remove("header--scroll");
    }
  }, 300);

  lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
});
