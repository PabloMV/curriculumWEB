const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");
const menuUL = document.querySelector(".mobile-menu ul");
const menuItems = document.querySelectorAll("#main-nav .primary-navbar a");
const menuItemsMob = document.querySelectorAll("#main-nav .mobile-menu li");
const theme = document.getElementById("toggle");
const header = document.getElementById("home");
const nav = document.querySelector("#main-nav");

/* menuItems.addEventListener("click", function(e) {
    e.preventDefault();
    menuItems.classList.remove("acyive");
    this.classList.add("active");
}); */

menuItems.forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    menuItems.forEach((a) => {
      a.classList.remove("active");
    });
    item.classList.add("active");
  });
});
menuItemsMob.forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    menuItemsMob.forEach((a) => {
      a.classList.remove("active");
    });
    item.classList.add("active");
    if (menuUL.offsetHeight !== 0) {
      menuUL.classList.add("slidedown");
    }
  });
});

btn.addEventListener("click", () => {
  //menu.classList.toggle("hidden");
  menuUL.classList.toggle("slidedown");
});
theme.addEventListener("click", () => {
  if (theme.checked) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
});
document.addEventListener("scroll", () => { 
  if (scrollY > header.offsetHeight) {
    nav.classList.add("fixed", "top-0");
  } else {
    nav.classList.remove("fixed", "top-0");
  }
});


//pdf
const btnpdf = document.querySelector("#tc-one");
const content = document.querySelector("body");

btnpdf.addEventListener("click", () => {
  var element = document.getElementById("body");
  html2pdf(element);
});
