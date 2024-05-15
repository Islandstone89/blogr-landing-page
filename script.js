
/* Select the navbar buttons */
let navbarButtons = document.querySelectorAll(".js-navbar__button");

/* Create disclosure toggle function */
function toggleDisclosure() {
  if (this.getAttribute("aria-expanded") === "true") {
    navbarButtons.forEach((button) => button.setAttribute("aria-expanded", "false"));
  } else {
    navbarButtons.forEach((button) => button.setAttribute("aria-expanded", "false"));
    this.setAttribute("aria-expanded", "true");
  }
}

/* Loop through navbar buttons and add Event Listener */
navbarButtons.forEach((button) => {
  button.addEventListener("click", toggleDisclosure)
})




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

/* function toggleDisclosure() {
    if (this.getAttribute("aria-expanded") === "true") {
      disclosureButtons.forEach((button) => button.setAttribute("aria-expanded", "false"));
    } else {
      disclosureButtons.forEach((button) => button.setAttribute("aria-expanded", "false"));
      this.setAttribute("aria-expanded", "true");
    }
  } */