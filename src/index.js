import header from "./header";
import footer from "./footer";
import home from "./home";
import menu from "./menu";
import contact from "./contact";
import './style.css';

header();

home();

footer();

function emptyMainDiv()
{
    let mainContentDiv = document.querySelector('#content');

    for(let i = 0; i < 2; i++)
    {
        mainContentDiv.removeChild(mainContentDiv.lastChild);
    }
    
}

 const homeEvent = document.querySelector('.home-tab-event');

 homeEvent.addEventListener('click', () => {
    emptyMainDiv();
    home();
    footer();
 });

 const menuEvent = document.querySelector('.menu-tab-event');

 menuEvent.addEventListener('click', () => {
    emptyMainDiv();
    menu();
    footer();
 });

 const contactEvent = document.querySelector('.contact-tab-event');

 contactEvent.addEventListener('click', () => {
    emptyMainDiv();
    contact();
    footer();
 });