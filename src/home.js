export default function home()
{
    const element = document.querySelector('#content');

    const div = document.createElement('div');
    div.textContent = 'e';

    element.appendChild(div);
}