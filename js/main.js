document.querySelector('#title-drop-first').addEventListener('click', openDropdown1)
document.querySelector('#title-drop-second').addEventListener('click', openDropdown2)
document.querySelector('#title-drop-last').addEventListener('click', openDropdown3)

function openDropdown1() {
  document.querySelector('#dropdown-first').classList.toggle('dropdown-active')
  document.querySelector('#icon1').classList.toggle('fa-angle-up')
  console.log('ok')
}
function openDropdown2() {
  document.querySelector('#dropdown-second').classList.toggle('dropdown-active')
  document.querySelector('#icon2').classList.toggle('fa-angle-up')
  console.log('ok')
}
function openDropdown3() {
  document.querySelector('#dropdown-last').classList.toggle('dropdown-active')
  document.querySelector('#icon3').classList.toggle('fa-angle-up')
  console.log('ok')
}


// TOGGLE MOBILE
const openMenu = document.querySelector('.toggle-mobile').addEventListener('click', function(){
  const navBar = document.querySelector('.nav-bar')
  navBar.classList.toggle('menu-mobile')
})



