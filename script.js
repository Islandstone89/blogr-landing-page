
/* Select the navbar buttons */
let navbarButtons = document.querySelectorAll(".js-navbar__button");



/* Loop through each of the buttons and assign Event Listener and arrow function */
navbarButtons.forEach(button  => {
    button.addEventListener("click", (e) => {
        button.setAttribute("aria-expanded", "true")
    } )
});



/* Select the open menu button */
let openMenuBtn = document.querySelector(".js-open-menu-btn");

/* Seelct the close menu button */
let closeMenuBtn = document.querySelector(".js-close-menu-btn");

/* Create function that opens the menu */
function openMenu() {
    openMenuBtn.setAttribute("aria-expanded", "true")
    openMenuBtn.classList.toggle("hide")
    closeMenuBtn.classList.toggle("show")
}

/* Create function that closes the menu */
function closeMenu() {
    openMenuBtn.setAttribute("aria-expanded", "false")
    openMenuBtn.classList.toggle("hide")
    closeMenuBtn.classList.toggle("show")
}

/* Add Event Listener on open menu button */
openMenuBtn.addEventListener("click", openMenu)

/* Add Event Listener on close menu button */
closeMenuBtn.addEventListener("click", closeMenu)