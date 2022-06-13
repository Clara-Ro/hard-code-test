const menuMobile = document.getElementById('menu-header');
const links = document.querySelectorAll('.buttons-header')
function toggleMenu(){
    const menuButtons = document.getElementById('buttons');
    menuButtons.classList.toggle('active')

}
console.log(links)
menuMobile.addEventListener('touchstart', toggleMenu);

for (const link of links) {
    link.addEventListener('touchstart', ()=>{setTimeout(toggleMenu, 100)});
    
}