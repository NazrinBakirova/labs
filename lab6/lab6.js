const menu = document.querySelector(".menu");
const button = document.querySelector(".header_burger_menu")
  button.addEventListener('click',()=>{
    menu.classList.add("active")
  })


  const Xbutton = document.querySelector(".X_button");

  Xbutton.addEventListener('click',()=>{
    menu.classList.remove("active")
  })


const menuItems = document.querySelectorAll('.menu_item');

menuItems.forEach(item => {

    item.addEventListener('mousedown', () => {
        item.style.color = 'rgb(220, 159, 84)';
    });
    item.addEventListener('mouseout', () => {
        item.style.color = 'black';
    });
});
