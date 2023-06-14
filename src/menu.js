export default function menu()
{
    const element = document.querySelector('#content');

    const div = document.createElement('div');
    div.textContent = 'This is the menu.';

    element.appendChild(div);
}