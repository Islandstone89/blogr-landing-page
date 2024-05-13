
/* Seelct the open menu button */
let openMenuBtn = document.querySelector(".js-open-menu-btn");

/* Seelct the close menu button */
let closeMenuBtn = document.querySelector(".js-close-menu-btn");

/* Create function that opens the menu */
function openMenu() {
    openMenuBtn.setAttribute("aria-expanded", "true")
}