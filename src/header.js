export default function header()
{
    const container = document.querySelector('#content');

    const header = document.createElement('header');
    const nav = document.createElement('nav');
    nav.classList.add('tabs');
    const ul = document.createElement('ul');
    ul.classList.add('tabs-list');

    const text = ['Home', 'Menu', 'Contact'];

    for(let i = 0; i < 3; i++)
    {
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.textContent = text[i];
        li.appendChild(a);
        ul.appendChild(li);
    }

    nav.appendChild(ul);
    header.appendChild(nav);

    container.appendChild(header);
    

}