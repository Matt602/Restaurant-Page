export default function contact()
{
    const element = document.querySelector('#content');

    const div = document.createElement('div');
    div.textContent = 'This is the contact.';

    element.appendChild(div);
}