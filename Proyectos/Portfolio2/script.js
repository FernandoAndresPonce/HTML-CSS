// esto nos permitiria que el header se mantenga fluido en el scroleo y ademas le podemos dar propiedades al sticky

const header = document.querySelector("header");

window.addEventListener("scroll", function() {header.classList.toggle("sticky", window.scrollY > 130);
});

let menu = document.querySelector('#menu-ico');
let menu_principal = document.querySelector('.menu_principal');

menu.onclick = () => {
    menu.classList.toggle('bx-menu');
    menu_principal.classList.toggle('open');
}