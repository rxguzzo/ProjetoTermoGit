//menu navbar

let menu = document.querySelector('.menu-icon')
let navbar = document.querySelector('.navbar')

menu.onclick = () => {
    navbar.classList.toggle('active');
    menu.classList.toggle('move');
    cart.classList.remove('active');
    login.classList.remove('active');
    cadastro.classList.remove('active');
}

//carrinho

let cart = document.querySelector('.cart')
document.querySelector('#cart-icon').onclick = () => {
    cart.classList.toggle('active');
    navbar.classList.remove('active')
    menu.classList.remove('move')
    login.classList.remove('active');
    cadastro.classList.remove('active')
}

//Formulario Login 

let login = document.querySelector('.login-form')
document.querySelector('#user-icon').onclick = () => {
    login.classList.toggle('active');
    cart.classList.remove('active');
    navbar.classList.remove('active');
    menu.classList.remove('move');
    

}

//click menu links 
window.onscroll = () => {
    navbar.classList.remove('active');
    menu.classList.remove('move');
    login.classList.remove('active');
    cadastro.classList.remove('active');
    cart.classList.remove('active');
}
//neutro

let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

//Scroll moderno

let scrolltop = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
    scrolltop.classList.toggle('active', window.scrollY > 0);
});

//efeito ppt

window.sr = ScrollReveal({ reset: true });

sr.reveal('.home', { duration: 2000 });
sr.reveal('.navbar', { duration: 2000 });
sr.reveal('..nav-icons', { duration: 2000 });
sr.reveal('.popular-content', { duration: 2000 });
sr.reveal('.about', { duration: 2000 });
sr.reveal('.produtos-content', { duration: 2500 });
sr.reveal('.newsletter', { duration: 2500 });
sr.reveal('.footer', { duration: 2500 });
sr.reveal('.home', { duration: 2000 });
sr.reveal('.section', { duration: 2000 });

