const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector(".menu");

toggle.addEventListener("click", ()=>{
    const isOpen = toggle.ariaExpanded === "true";
    const isClosed = !isOpen;
    console.log("isOpen : ", isOpen, "isClosed : ", isClosed);
    if (isOpen) {
        nav.ariaHidden = "true";
        toggle.ariaExpanded = "false";
    } else {
        nav.ariaHidden = "false";
        toggle.ariaExpanded = "true";
    }
});