// Scroll

let section = document.getElementById("foodShowCase");
let btn = document.getElementById("btn");

btn.addEventListener("click", ()=>{
    section.scrollIntoView({ behavior: "smooth" });
})