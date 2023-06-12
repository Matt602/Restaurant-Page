export default function footer()
{
    const container = document.querySelector('#content');
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    const div1 = document.createElement('div');
    div1.textContent = 'Images from a';
    const div2 = document.createElement('div');
    div2.textContent = 'Images from b';
    const div3 = document.createElement('div');
    div3.textContent = 'Images from c';

    footer.appendChild(div1);
    footer.appendChild(div2);
    footer.appendChild(div3);

    container.appendChild(footer);
}