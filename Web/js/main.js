document.querySelector(".toggleMenu");

let line1 = document.querySelector(".bar1_menu");
let line2 = document.querySelector(".bar2_menu");
let line3 = document.querySelector(".bar3_menu");


function animateBars(){
    line1.classList.toggle("active_bar1_menu");
    line2.classList.toggle("active_bar2_menu");
    line3.classList.toggle("active_bar3_menu");   
}

const nav = document.querySelector("#nav");
const open = document.querySelector("#open");
const close = document.querySelector("#close");

open.addEventListener("click", () => {
    nav.classList.add("visible");
    animateBars();
})

close.addEventListener("click", () => {
    nav.classList.remove("visible");
    animateBars();
})
