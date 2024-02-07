const navBtn = document.querySelector(".mobile-nav");
const nav = document.querySelector(".header__nav");
const logo = document.querySelector(".header__logo");

navBtn.addEventListener("click", ()=>{
    const visibility  = nav.getAttribute("data-visible");
    if(visibility === "false"){
        nav.setAttribute("data-visible", true);
        navBtn.setAttribute("data-expanded", true);
        logo.setAttribute("data-expanded", true);
    }else{
        nav.setAttribute("data-visible", false);
        navBtn.setAttribute("data-expanded", false);
        logo.setAttribute("data-expanded", false);
    }
})
