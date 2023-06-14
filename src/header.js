export default function header()
{
    const container = document.querySelector('#content');

    const header = document.createElement('header');
    const nav = document.createElement('nav');
    nav.classList.add('tabs');
    const ul = document.createElement('ul');
    ul.classList.add('tabs-list');

    
    let li = document.createElement('li');
    li.classList.add('home-tab-event');
    let a = document.createElement('a');
    a.textContent = 'Home';
    li.appendChild(a);
    ul.appendChild(li);

    li = document.createElement('li');
    li.classList.add('menu-tab-event');
    a = document.createElement('a');
    a.textContent = 'Menu';
    li.appendChild(a);
    ul.appendChild(li);

    li = document.createElement('li');
    li.classList.add('contact-tab-event');
    a = document.createElement('a');
    a.textContent = 'Contact';
    li.appendChild(a);
    ul.appendChild(li);

    nav.appendChild(ul);
    header.appendChild(nav);

    container.appendChild(header);
    

}