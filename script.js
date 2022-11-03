const fa_sun = document.querySelector('.btn_sun');
const fa_moon = document.querySelector('.btn_moon');
const body = document.querySelector('body');
const history = document.querySelector('.history');
const main = document.querySelector('.main');

fa_sun.addEventListener('click', ()=> {
    fa_sun.classList.toggle('btn_sun');
    fa_sun.classList.toggle('btn_sun_active');
    fa_moon.classList.toggle('btn_moon_active');
    fa_moon.classList.toggle('btn_moon');
    body.style.background = "#20252C";
    history.classList.toggle('history_active');
    main.classList.toggle('main_active');
})
fa_moon.addEventListener('click', ()=> {
    fa_sun.classList.toggle('btn_sun');
    fa_sun.classList.toggle('btn_sun_active');
    fa_moon.classList.toggle('btn_moon_active');
    fa_moon.classList.toggle('btn_moon');
    body.style.background = "#d4ebf7";
    history.classList.toggle('history_active');
    main.classList.toggle('main_active');
})





const home = document.querySelector('.home');


home.addEventListener("click", ()=> {
   window.location.href ="https://christianm777.github.io/";
})