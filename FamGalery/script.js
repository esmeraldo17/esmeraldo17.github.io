const menuBtn = document.querySelector(".menu-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-items");

menuBtn.onclick = () => {
    items.classList.add("active");
    menuBtn.classList.add("hide");
    cancelBtn.classList.add("show");
}

cancelBtn.onclick = () => {
    items.classList.remove("active");
    menuBtn.classList.remove("hide");
    cancelBtn.style.color = '#ff3d00';
    cancelBtn.classList.remove("show");
}
