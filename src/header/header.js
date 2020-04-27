var works = document.querySelector('.works');
var menu = document.getElementById('nav_id');
var bmenu = document.querySelector('.menu__box');
var tab = document.querySelector('.portfolio__buttons');
var phone1 = document.querySelector('.verphone');
var phone2 = document.querySelector('.horphone');
var portfolioButtons = document.querySelectorAll('.portfolio_btn');

// HEADER

menu.addEventListener('click', (event) => {
    if (event.target!=menu) 
    {
        menu.querySelectorAll('a').forEach(el => el.classList.remove('nav_active'));
        event.target.classList.add('nav_active');
    }
});

bmenu.addEventListener('click', (event) => {
    if (event.target!=bmenu) 
    {
        bmenu.querySelectorAll('.menu__item').forEach(el => el.classList.remove('menu__item_active'));
        event.target.classList.add('menu__item_active');
    }
});


if (document.getElementById("menu__toggle").checked = true) {
    document.querySelector("main").addEventListener('click', (event) => {
        if (event.target!=bmenu) 
        {
            document.getElementById("menu__toggle").checked = false;
        }
    });
}

//SCROLL 

var complex = document.getElementById('complex').offsetTop-95;
var about = document.getElementById('about').offsetTop-95;
var tour = document.getElementById('3d-tour').offsetTop-95;
var komments = document.getElementById('komments').offsetTop-95;
var contact = document.getElementById('contacts').offsetTop-95;
var navLink = document.querySelectorAll('.nav_link');
var bmenuItem = document.querySelectorAll('.menu__item');

window.addEventListener('scroll', function() {
    var page_offset=window.pageYOffset;

    if(page_offset >= 0) {
        menu.querySelectorAll('a').forEach(el => el.classList.remove('nav_active'));
        bmenuItem.forEach(el => el.classList.remove('menu__item_active'));
        navLink[0].classList.add('nav_active');
        bmenuItem[0].classList.add('menu__item_active');
    }
    if(page_offset >= about && page_offset < complex) {
        menu.querySelectorAll('a').forEach(el => el.classList.remove('nav_active'));
        bmenuItem.forEach(el => el.classList.remove('menu__item_active'));
        navLink[1].classList.add('nav_active');
        bmenuItem[1].classList.add('menu__item_active');
    }
    if(page_offset >= complex && page_offset < tour) {
        menu.querySelectorAll('a').forEach(el => el.classList.remove('nav_active'));
        bmenuItem.forEach(el => el.classList.remove('menu__item_active'));
        navLink[2].classList.add('nav_active');
        bmenuItem[2].classList.add('menu__item_active');
    }
    if(page_offset >= tour && page_offset < komments) {
        menu.querySelectorAll('a').forEach(el => el.classList.remove('nav_active'));
        bmenuItem.forEach(el => el.classList.remove('menu__item_active'));
        navLink[3].classList.add('nav_active');
        bmenuItem[3].classList.add('menu__item_active');
    }
    if(page_offset >= komments && page_offset < contact) {
        menu.querySelectorAll('a').forEach(el => el.classList.remove('nav_active'));
        bmenuItem.forEach(el => el.classList.remove('menu__item_active'));
        navLink[4].classList.add('nav_active');
        bmenuItem[4].classList.add('menu__item_active');
    }
    if(page_offset>=contact) {
        menu.querySelectorAll('a').forEach(el => el.classList.remove('nav_active'));
        bmenuItem.forEach(el => el.classList.remove('menu__item_active'));
        navLink[5].classList.add('nav_active');
        bmenuItem[5].classList.add('menu__item_active');
    }

});