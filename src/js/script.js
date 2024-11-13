const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector(".menu");

toggle.addEventListener("click", ()=>{
    nav.ariaHidden = "false";
    toggle.ariaExpanded = "true";
});