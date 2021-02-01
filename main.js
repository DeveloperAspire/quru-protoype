const p1= document.querySelector("#data-one")
const p2= document.querySelector("#data-two")
const p3= document.querySelector("#data-three")
const p4= document.querySelector("#data-four")

const div1= document.querySelector("#div-one")
const div2= document.querySelector("#div-two")
const div3= document.querySelector("#div-three")
const div4= document.querySelector("#div-four")

const menuIcon = document.querySelector("#menu-icon")
const mobileMenu = document.querySelector("#mobile-menu")

const cancelIcon = document.querySelector('#cancel-icon')


// TOGGLE BAR
menuIcon.addEventListener('click', ()=>{
    cancelIcon.classList.remove("hidden")
    menuIcon.classList.add("hidden")
    mobileMenu.classList.remove('hidden')

})

// CANCELS THE MOBILE MENU
cancelIcon.addEventListener('click', ()=>{
    cancelIcon.classList.add("hidden")
    menuIcon.classList.remove("hidden")
    mobileMenu.classList.add('hidden')

})


// BRINGS OUT THE QUESTION TO ANSWERS
div1.addEventListener("click", (e)=>{
    p1.classList.remove('hidden')
})
div2.addEventListener("click", (e)=>{
    p2.classList.remove('hidden')
})
div3.addEventListener("click", (e)=>{
    p3.classList.remove('hidden')
})
div4.addEventListener("click", (e)=>{
    p4.classList.remove('hidden')
})

// CANCELS THE QUESTION