let openBtn=document.querySelector(".open-icon")
let closeBtn=document.querySelector(".close-icon")
let btn=document.querySelector(".burger-menu")
let navMenu=document.querySelector("#mobile-navs")

btn.addEventListener("click",()=>{
    if(closeBtn.style.display=="block"){
        openBtn.style.display="block"
        navMenu.style.left="-100rem"
        closeBtn.style.display="none"
    }else{
        openBtn.style.display="none"
        navMenu.style.left="0rem";
        closeBtn.style.display="block"
    }
})