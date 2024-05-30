const ham = document.querySelector(".ham-menu");
const nav = document.querySelector(".nav-links");

ham.addEventListener("click", () => {
    nav.classList.toggle("open");
});

//contact me popup  
const contact = document.querySelector(".contact");
const pop = document.querySelector(".popup");
contact.addEventListener("click", () => {
    pop.classList.toggle("open");
})

//contact me cross
const cross = document.querySelector(".cross");
cross.addEventListener("click", () => {
    pop.classList.remove("open");
})