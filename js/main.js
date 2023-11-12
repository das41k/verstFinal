const menu = document.body
const burger = document.querySelector('.burger-icon')
const burgerLink = document.querySelectorAll('.nav__link')
burger.addEventListener('click',() =>  {
  if (menu.classList.contains("body--opened-menu")) {
    menu.classList.remove("body--opened-menu")
  } else {
    menu.classList.add("body--opened-menu")
  }
})
document.addEventListener('keydown',(event) =>  {
  if (menu.classList.contains("body--opened-menu") && (event.code == "Escape")) {
    menu.classList.remove("body--opened-menu")
  }
})
burgerLink.forEach(item => {
  item.addEventListener('click', () => {
    if (menu.classList.contains("body--opened-menu")) {
      menu.classList.remove("body--opened-menu") 
    }
  })
})


