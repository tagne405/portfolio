'use strict'

let elemToggle = function(elem){elem.classList.toggle("active");}



// header sticky & go-top

let header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]"); 


window.addEventListener("scroll",function (){
     if(window.scrollY >= 10){
        header.classList.add("active");
        goTopBtn.classList.add("active");
     }else{
        header.classList.remove("active");
        goTopBtn.classList.remove("active");
     }
})

// navbar Toggle

let navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
let navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click",function (){
    elemToggle(navToggleBtn);
    elemToggle(navbar);
    elemToggle(document.body);
});


// Skills toggle

let toggleBtnBox = document.querySelector("[data-toggle-box]");
let toggleBtn = document.querySelectorAll("[data-toggle-btn]");
let skillsBox = document.querySelector("[data-skills-box]");

for(let i = 0;i < toggleBtn.length; i++){
    toggleBtn[i].addEventListener("click", function(){
        elemToggle(toggleBtnBox);

        for(let i=0; i<toggleBtn.length;i++){
        elemToggle(toggleBtn[i]);}
        elemToggle(skillsBox);
    })

}



// dark and light

const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function(){

    elemToggle(themeToggleBtn);

    if(themeToggleBtn.classList.contains("active")){
        document.body.classList.remove("dark_theme");
        document.body.classList.add("light_theme");

        localStorage.setItem("theme", "light_theme");
    }else{
        document.body.classList.add("dark_theme");
        document.body.classList.remove("light_theme");

        localStorage.setItem("theme", "dark_theme");
    }

});


// check le localStorage et retourne le theme

if(localStorage.getItem("theme") === "light_theme"){
    themeToggleBtn.classList.add("active");
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");
}else{
    themeToggleBtn.classList.remove("active");
    document.body.classList.remove("light_theme");
    document.body.classList.add("dark_theme");
}