export default function home()
{
    const content = document.querySelector('#content');

    const div_main_content = document.createElement('div');
    div_main_content.setAttribute('id', 'main-content');

    const div_header = document.createElement('div');
    div_header.classList.add('header-main-content');
    div_header.classList.add('main-content-info');
    div_header.textContent = 'Generic Italian Restaurant';

    div_main_content.appendChild(div_header);

    const div_review = document.createElement('div');
    div_review.classList.add('review-main-content');
    div_review.classList.add('main-content-info');

    const p_review = document.createElement('p');
    p_review.textContent = "This place has the best pizza I have ever eaten. It is so good I. I have visited many places and this place hands down has the best pizza. It is really good. The sauce is fresh, the toppings are fresh, and the pizza is crispy";
    const p_critic = document.createElement('p');
    p_critic.classList.add('critic');
    p_critic.textContent = 'Random Critic';

    div_review.appendChild(p_review);
    div_review.appendChild(p_critic);

    div_main_content.appendChild(div_review);

    const div_hours = document.createElement('div');
    div_hours.classList.add('hours-section');
    div_hours.classList.add('main-content-info');
    const hours_header = document.createElement('h1');
    hours_header.textContent = 'Hours';

    div_hours.appendChild(hours_header);
    let hours = [
        'Sunday: 8am  -  8pm',
        'Monday: 6am  -  6pm',
        'Tuesday: 6am  -  6pm',
        'Wednesday: 6am  -  6pm',
        'Thursday: 6am  -  10pm',
        'Friday: 6am  -  10pm',
        'Saturday: 8am  -  10pm'
    ]
    for(let i = 0; i < 7; i++)
    {
        let p_days = document.createElement('p');
        p_days.classList.add('hours');
        p_days.textContent = hours[i];
        div_hours.appendChild(p_days);
    }
    div_main_content.appendChild(div_hours);

    const div_location = document.createElement('div');
    div_location.classList.add('location');
    div_location.classList.add('main-content-info');
    const location_header = document.createElement('h1');
    location_header.textContent = 'Location';
    const p_header = document.createElement('p');
    p_header.textContent = '12345, Random Street, Random City, some Country';
 
    div_location.appendChild(location_header);
    div_location.appendChild(p_header);

    div_main_content.appendChild(div_location);

    content.appendChild(div_main_content);
}