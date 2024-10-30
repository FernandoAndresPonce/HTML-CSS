// esto nos permitiria que el header se mantenga fluido en el scroleo y ademas le podemos dar propiedades al sticky

const header = document.querySelector("header");

window.addEventListener("scroll", function() {header.classList.toggle("sticky", window.scrollY > 130);
});


let menu = document.querySelector('#menu-ico');
let menulist = document.querySelector('.menulist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    menulist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    menulist.classList.remove('open');
};


var typed = new Typed(".input", {
    strings: [" Desarrollador C#", ".NET"],
    backSpeed: 80,        // La velocidad a la que se borra el texto
    typeSpeed: 120,       // La velocidad a la que se escribe el texto (ajusta este valor para ralentizar la escritura)
    loop: true,
});


//carousel
let currentSlide = 0;
const images = [
    'img/p1.jpg',
    'img/p2.jpg',
    // Agrega más imágenes según sea necesario
];

function moveSlide(direction) {
    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = images.length - 1; // Regresa al último slide
    } else if (currentSlide >= images.length) {
        currentSlide = 0; // Regresa al primer slide
    }

    const carouselImage = document.getElementById('carouselImage');
    carouselImage.src = images[currentSlide]; // Cambia la imagen
}