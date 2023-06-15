export default function contact()
{
    const element = document.querySelector('#content');

    const div = document.createElement('div');
    div.setAttribute('id', 'main-content');

    const contact_header = document.createElement('h1');
    contact_header.classList.add('main-content-info');
    contact_header.classList.add('header-main-content');
    contact_header.textContent = 'Contact Us';

    const div_mama = document.createElement('div');
    div_mama.classList.add('main-content-info');
    const div_mama_name = document.createElement('div');
    div_mama_name.textContent = 'Mama Bear';
    const div_mama_job = document.createElement('div');
    div_mama_job.textContent = 'Chef';
    const div_mama_phone = document.createElement('div');
    div_mama_phone.textContent = 'XXX-XXX-XXXX';
    const div_mama_email = document.createElement('div');
    div_mama_email.textContent = 'Fake email for Mama';

    div_mama.appendChild(div_mama_name);
    div_mama.appendChild(div_mama_job);
    div_mama.appendChild(div_mama_phone);
    div_mama.appendChild(div_mama_email);

    const div_papa = document.createElement('div');
    div_papa.classList.add('main-content-info');
    const div_papa_name = document.createElement('div');
    div_papa_name.textContent = 'Papa Bear';
    const div_papa_job = document.createElement('div');
    div_papa_job.textContent = 'Manager';
    const div_papa_phone = document.createElement('div');
    div_papa_phone.textContent = 'XXX-XXX-XXXX';
    const div_papa_email = document.createElement('div');
    div_papa_email.textContent = 'Fake email for Papa';

    div_papa.appendChild(div_papa_name);
    div_papa.appendChild(div_papa_job);
    div_papa.appendChild(div_papa_phone);
    div_papa.appendChild(div_papa_email);

    const div_baby = document.createElement('div');
    div_baby.classList.add('main-content-info');
    const div_baby_name = document.createElement('div');
    div_baby_name.textContent = 'Baby Bear';
    const div_baby_job = document.createElement('div');
    div_baby_job.textContent = 'Waiter';
    const div_baby_phone = document.createElement('div');
    div_baby_phone.textContent = 'XXX-XXX-XXXX';
    const div_baby_email = document.createElement('div');
    div_baby_email.textContent = 'Fake email for Baby';

    div_baby.appendChild(div_baby_name);
    div_baby.appendChild(div_baby_job);
    div_baby.appendChild(div_baby_phone);
    div_baby.appendChild(div_baby_email);

    div.appendChild(contact_header);
    div.appendChild(div_mama);
    div.appendChild(div_papa);
    div.appendChild(div_baby);

    element.appendChild(div);

}