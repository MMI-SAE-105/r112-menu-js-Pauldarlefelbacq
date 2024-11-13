const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector(".menu");

toggle.addEventListener("click", ()=>{
    const isOpen = toggle.ariaExpanded === "true";
    const isClosed = !isOpen;
    console.log("isOpen : ", isOpen, "isClosed : ", isClosed);
    if (isOpen) {
        nav.ariaHidden = "true";
        toggle.ariaExpanded = "false";
        document.body.classList.remove("noscroll");
    } else {
        nav.ariaHidden = "false";
        toggle.ariaExpanded = "true";
        document.body.classList.add("noscroll");
    }
});