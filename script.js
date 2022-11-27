const hamburger=document.querySelector('.hamburger');
const menu=document.querySelector(' .header__menu');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    menu.classList.toggle('menu-active');
   
})