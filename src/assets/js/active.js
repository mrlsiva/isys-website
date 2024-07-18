
window.addEventListener('load', (event) => {
    const preloader = document.getElementsByClassName("preloader");
    preloader.classList.add("loaded");
});

setTimeout(function() {
    preloader.classList.remove('loaded');
}, 600);

document.getElementsByClassName("side-menu-toggle offcanvas-btn").addEventListener("click", showMenu);

function showMenu() {
    const openMenu = document.getElementsByClassName("offset-menu");
    openMenu.classList.add("show");
}

document.getElementsById("offset-menu-close-btn").addEventListener("click", closeMenu);

function closeMenu() {
    const hideMenu = document.getElementsByClassName("offset-menu");
    hideMenu.classList.remove("show");
}

let searchBtn = document.getElementsByClassName( 'search-btn' );
searchBtn.addEventListener("click", searchToggle);

const searchShow = document.getElementsByClassName( 'search-box' );
function searchToggle() {
    searchShow.classList.toggle('show'); // Add or remove class
}

var hamburger = document.getElementById( 'hamburger' );

hamburger.addEventListener("click", function(){
    let mobileNav = document.getElementsByClassName("mobile-nav");
    mobileNav.classList.add('show'); // Add class
    let overlay = document.getElementsByClassName("overlay");
    overlay.classList.add('active'); // Add class
});

var closeNav = document.getElementsByClassName( 'close-nav' );

closeNav.addEventListener("click", function(){
    let mobileNav = document.getElementsByClassName("mobile-nav");
    mobileNav.classList.remove('show'); // Add class
    let overlay = document.getElementsByClassName("overlay");
    overlay.classList.remove('active'); // Add class
});