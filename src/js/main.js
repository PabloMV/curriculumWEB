const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");
const theme = document.getElementById("toggle")


btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
   
});
theme.addEventListener("click", () => {
    if (theme.checked) {
        document.documentElement.classList.add('dark')               
    } else {
        document.documentElement.classList.remove('dark')                
    }
   
});