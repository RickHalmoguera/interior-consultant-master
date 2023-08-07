const menuBtn = document.getElementById("menuOpenBtn")
const mobileMenu = document.getElementById("mobileMenu")
const closeMenuBtn = document.getElementById("menuCloseBtn")

const openMenu = ()=>{
    mobileMenu.style.display ="block"
}

const closeMenu = ()=>{
    mobileMenu.style.display ="none"
}



menuBtn.addEventListener("click", openMenu)
closeMenuBtn.addEventListener("click", closeMenu)